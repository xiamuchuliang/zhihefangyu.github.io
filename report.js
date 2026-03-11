// report.js - 诊断报告页面逻辑（不使用ES6模块）

document.addEventListener('DOMContentLoaded', () => {
  // 从 localStorage 获取诊断数据
  let diagnosisData = null;

  try {
    const savedData = localStorage.getItem('diagnosisResult');
    if (savedData) {
      diagnosisData = JSON.parse(savedData);
    }
  } catch (error) {
    console.error('读取诊断数据失败:', error);
  }

  // 如果没有数据，使用默认数据
  if (!diagnosisData) {
    diagnosisData = {
      healthScore: 85,
      problem: '暂无诊断数据',
      suggestions: [
        '请先在数据输入页面填写植物信息',
        '上传植物照片进行诊断',
        '系统将根据环境数据生成个性化建议'
      ],
      plantName: '未知',
      stageName: '未知'
    };
  }

  // 渲染诊断数据到页面
  renderDiagnosisData(diagnosisData);

  // 按钮交互
  document.getElementById('plan-btn').addEventListener('click', () => {
    showToast('个性化种植方案生成中...');
  });

  document.getElementById('expert-btn').addEventListener('click', () => {
    showToast('正在为你连接种植专家...');
  });

  // 保存报告按钮
  const saveButtons = document.querySelectorAll('button');
  saveButtons.forEach(btn => {
    if (btn.textContent.includes('保存')) {
      btn.addEventListener('click', () => {
        showToast('诊断报告已保存到本地');
      });
    }
  });

  // 保存到云端按钮
  document.getElementById('save-to-cloud-btn').addEventListener('click', () => {
    if (diagnosisData && diagnosisData.healthScore !== undefined) {
      // 检查是否已经保存过
      const cloudLogs = JSON.parse(localStorage.getItem('aiDiagnosisLogs') || '[]');
      const existingRecord = cloudLogs.find(log =>
        log.cropName === diagnosisData.plantName &&
        Math.abs(new Date(log.createTime) - new Date()) < 60000 // 1分钟内的记录
      );

      if (existingRecord) {
        showToast('该诊断记录已存在于云端日志中', 'warning');
      } else {
        // 手动保存到云端
        saveCurrentDiagnosisToCloud(diagnosisData);
        showToast('诊断报告已保存到云端日志！', 'success');
      }
    } else {
      showToast('没有可保存的诊断数据', 'error');
    }
  });
});

// 渲染诊断数据函数
function renderDiagnosisData(data) {
  // 更新健康评分
  const scoreElement = document.getElementById('health-score');
  scoreElement.textContent = data.healthScore;

  // 设置评分颜色
  scoreElement.classList.remove('text-success', 'text-warning', 'text-danger');
  if (data.healthScore >= 90) {
    scoreElement.classList.add('text-success');
  } else if (data.healthScore >= 70) {
    scoreElement.classList.add('text-warning');
  } else {
    scoreElement.classList.add('text-danger');
  }

  // 更新问题描述
  const problemDesc = document.getElementById('problem-desc');
  let descText = data.problem;
  if (data.plantName && data.plantName !== '未知') {
    descText = `${data.plantName} - ${descText}`;
  }
  problemDesc.textContent = descText;

  // 渲染建议列表
  const suggestionsList = document.getElementById('suggestions-list');
  suggestionsList.innerHTML = ''; // 清空现有内容

  data.suggestions.forEach(suggestion => {
    const li = document.createElement('li');
    li.className = 'list-group-item border-0 ps-0';
    li.innerHTML = `<i class="bi bi-check-circle text-success me-2"></i>${suggestion}`;
    suggestionsList.appendChild(li);
  });
}
// 手动保存当前诊断到云端
function saveCurrentDiagnosisToCloud(diagnosisData) {
  try {
    // 生成唯一ID
    const timestamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
    const dataId = `AI${timestamp}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;

    // 创建云端日志记录
    const logRecord = {
      id: dataId,
      type: "diagnosis",
      typeName: "AI植物诊断",
      cropName: diagnosisData.plantName || "未知植物",
      createTime: new Date().toLocaleString('zh-CN'),
      updateTime: new Date().toLocaleString('zh-CN'),
      status: "processed",
      statusName: "已处理",
      inputData: {
        plantType: diagnosisData.plantName || "未知植物",
        plantStage: diagnosisData.stageName || "未知阶段",
        problemDescription: diagnosisData.problem || "无异常症状",
        source: "手动保存"
      },
      aiResult: {
        healthScore: diagnosisData.healthScore,
        diagnosis: diagnosisData.problem,
        suggestions: diagnosisData.suggestions,
        confidence: "95%",
        analysisTime: new Date().toLocaleString('zh-CN')
      }
    };

    // 获取现有的云端日志
    let cloudLogs = JSON.parse(localStorage.getItem('aiDiagnosisLogs') || '[]');

    // 添加新记录到开头
    cloudLogs.unshift(logRecord);

    // 限制记录数量（保留最新的100条）
    if (cloudLogs.length > 100) {
      cloudLogs = cloudLogs.slice(0, 100);
    }

    // 保存到localStorage
    localStorage.setItem('aiDiagnosisLogs', JSON.stringify(cloudLogs));

    console.log('诊断记录已手动保存到云端日志:', dataId);

  } catch (error) {
    console.error('手动保存云端日志失败:', error);
  }
}