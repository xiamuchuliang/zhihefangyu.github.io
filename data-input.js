// data-input.js - 数据输入页面逻辑（不使用ES6模块）

document.addEventListener('DOMContentLoaded', () => {
  // 1. 获取文件上传元素
  const fileInput = document.getElementById('file-input');

  // 2. 植物种类与种植时长联动功能
  const plantTypeSelect = document.getElementById('plant-type');
  const plantTimeSelect = document.getElementById('plant-time');

  // 初始化植物种类下拉菜单
  function initPlantTypes() {
    // 从全局变量 plantDatabase 中获取所有植物名称
    const plantNames = Object.keys(plantDatabase);

    plantNames.forEach(name => {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      plantTypeSelect.appendChild(option);
    });
  }

  // 根据选择的植物，动态更新种植时长选项
  function updatePlantTimeOptions(selectedPlant) {
    // 清空原有选项
    plantTimeSelect.innerHTML = '';
    plantTimeSelect.disabled = true;

    if (!selectedPlant || !plantDatabase[selectedPlant]) {
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = '请先选择植物种类';
      plantTimeSelect.appendChild(defaultOption);
      return;
    }

    // 启用种植时长下拉菜单
    plantTimeSelect.disabled = false;

    // 获取该植物的生长周期
    const growthCycles = plantDatabase[selectedPlant].growthCycle;

    // 添加一个默认提示选项
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '请选择种植时长（生长阶段）';
    plantTimeSelect.appendChild(defaultOption);

    // 为每个生长阶段创建选项
    growthCycles.forEach(cycle => {
      const option = document.createElement('option');
      option.value = cycle.stageName; // 使用阶段名称作为值
      // 显示阶段名称和时长范围
      if (cycle.daysRange) {
        option.textContent = `${cycle.stageName} (${cycle.daysRange})`;
      } else if (cycle.duration) {
        option.textContent = `${cycle.stageName} (${cycle.duration})`;
      } else {
        option.textContent = cycle.stageName;
      }
      plantTimeSelect.appendChild(option);
    });
  }

  // 绑定植物种类变化事件
  plantTypeSelect.addEventListener('change', (e) => {
    const selectedPlant = e.target.value;
    updatePlantTimeOptions(selectedPlant);
  });

  // 页面加载时初始化植物种类
  initPlantTypes();

  // 3. 计算健康评分的函数
  function calculateHealthScore(formData) {
    const plant = plantDatabase[formData.plantType];
    if (!plant) {
      return {
        healthScore: 50,
        problem: '未知植物类型',
        suggestions: ['请选择正确的植物类型']
      };
    }

    let score = 100;
    const problems = [];
    const suggestions = [];

    // 解析适宜环境范围
    const suitableTemp = plant.suitableEnvironment.temperature.match(/(\d+)-(\d+)/);
    const suitableHumidity = plant.suitableEnvironment.humidity.match(/(\d+)-(\d+)/);
    const suitableLight = plant.suitableEnvironment.lightHours.match(/(\d+)-(\d+)/);

    // 1. 检查温度
    if (suitableTemp) {
      const minTemp = parseFloat(suitableTemp[1]);
      const maxTemp = parseFloat(suitableTemp[2]);
      const temp = formData.temperature;

      if (temp < minTemp) {
        const diff = minTemp - temp;
        score -= Math.min(diff * 2, 20);
        problems.push('温度过低');
        suggestions.push(`当前温度${temp}℃偏低，建议提高至${minTemp}-${maxTemp}℃范围内`);
      } else if (temp > maxTemp) {
        const diff = temp - maxTemp;
        score -= Math.min(diff * 2, 20);
        problems.push('温度过高');
        suggestions.push(`当前温度${temp}℃偏高，建议降低至${minTemp}-${maxTemp}℃范围内`);
      }
    }

    // 2. 检查湿度
    if (suitableHumidity) {
      const minHumidity = parseFloat(suitableHumidity[1]);
      const maxHumidity = parseFloat(suitableHumidity[2]);
      const humidity = formData.humidity;

      if (humidity < minHumidity) {
        const diff = minHumidity - humidity;
        score -= Math.min(diff * 0.5, 15);
        problems.push('湿度过低');
        suggestions.push(`当前湿度${humidity}%偏低，建议增加至${minHumidity}-${maxHumidity}%，可通过喷水或加湿器改善`);
      } else if (humidity > maxHumidity) {
        const diff = humidity - maxHumidity;
        score -= Math.min(diff * 0.5, 15);
        problems.push('湿度过高');
        suggestions.push(`当前湿度${humidity}%偏高，建议降低至${minHumidity}-${maxHumidity}%，加强通风`);
      }
    }

    // 3. 检查光照
    if (suitableLight) {
      const minLight = parseFloat(suitableLight[1]);
      const maxLight = parseFloat(suitableLight[2]);
      const light = formData.lightHours;

      if (light < minLight) {
        const diff = minLight - light;
        score -= Math.min(diff * 3, 20);
        problems.push('光照不足');
        suggestions.push(`当前光照${light}小时/天不足，建议增加至${minLight}-${maxLight}小时，可移至光照充足处`);
      } else if (light > maxLight) {
        const diff = light - maxLight;
        score -= Math.min(diff * 2, 15);
        problems.push('光照过强');
        suggestions.push(`当前光照${light}小时/天过强，建议减少至${minLight}-${maxLight}小时，避免暴晒`);
      }
    }

    // 4. 根据生长阶段添加建议
    const currentStage = plant.growthCycle.find(cycle => cycle.stageName === formData.plantTime);
    if (currentStage && currentStage.keyTasks) {
      suggestions.push(`当前处于${currentStage.stageName}，重点任务：${currentStage.keyTasks.join('、')}`);
    }

    // 5. 如果用户填写了问题描述，降低评分
    if (formData.problem && formData.problem.trim()) {
      score -= 10;
      problems.push('存在异常症状');
      suggestions.push('建议上传清晰照片，以便更准确诊断具体问题');
    }

    // 确保评分在 0-100 之间
    score = Math.max(0, Math.min(100, Math.round(score)));

    // 生成问题描述
    let problemDesc = '';
    if (problems.length === 0) {
      problemDesc = '生长环境良好，继续保持';
    } else {
      problemDesc = problems.join('，');
    }

    // 如果没有具体建议，添加通用建议
    if (suggestions.length === 0) {
      suggestions.push('继续保持当前养护方式');
      suggestions.push('定期观察植物生长状态');
      suggestions.push('根据季节变化适当调整养护策略');
    }

    return {
      healthScore: score,
      problem: problemDesc,
      suggestions: suggestions,
      plantName: formData.plantType,
      stageName: formData.plantTime
    };
  }

  // 4. 表单提交处理
  const submitBtn = document.getElementById('submit-btn');
  const originalBtnText = submitBtn.innerHTML;

  submitBtn.addEventListener('click', async () => {
    // 表单验证
    if (!validateForm('plant-form')) {
      showToast('请填写完整的表单信息', 'error');
      return;
    }

    // 检查是否上传图片
    if (!fileInput || !fileInput.files.length) {
      showToast('请上传植物照片', 'error');
      return;
    }

    // 检查文件类型
    if (!fileInput.files[0].type.startsWith('image/')) {
      showToast('请上传jpg/png等图片格式的文件', 'error');
      return;
    }

    // 收集表单数据
    const formData = {
      plantType: document.getElementById('plant-type').value,
      plantTime: document.getElementById('plant-time').value,
      temperature: parseFloat(document.getElementById('temp').value),
      humidity: parseFloat(document.getElementById('humidity').value),
      lightHours: parseFloat(document.getElementById('light').value),
      problem: document.querySelector('textarea').value
    };

    // 计算健康评分
    const diagnosisResult = calculateHealthScore(formData);

    // 将诊断结果保存到 localStorage
    localStorage.setItem('diagnosisResult', JSON.stringify(diagnosisResult));

    // 同时保存到云端日志
    saveToCloudLogs(formData, diagnosisResult);

    // 显示加载状态
    showLoading('submit-btn');

    try {
      // 模拟API请求
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 提交成功，跳转到报告页
      showToast('诊断请求已提交，正在生成报告...');
      setTimeout(() => {
        window.location.href = 'report.html';
      }, 1500);
    } catch (error) {
      showToast('提交失败，请重试', 'error');
      hideLoading('submit-btn', originalBtnText);
    }
  });
});

// 保存诊断记录到云端日志
function saveToCloudLogs(formData, diagnosisResult) {
  try {
    // 生成唯一ID
    const timestamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
    const dataId = `AI${timestamp}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;

    // 创建云端日志记录
    const logRecord = {
      id: dataId,
      type: "diagnosis",
      typeName: "AI植物诊断",
      cropName: formData.plantType,
      createTime: new Date().toLocaleString('zh-CN'),
      updateTime: new Date().toLocaleString('zh-CN'),
      status: "processed",
      statusName: "已处理",
      inputData: {
        plantType: formData.plantType,
        plantStage: formData.plantTime,
        temperature: `${formData.temperature}℃`,
        humidity: `${formData.humidity}%`,
        lightHours: `${formData.lightHours}小时/天`,
        problemDescription: formData.problem || "无异常症状"
      },
      aiResult: {
        healthScore: diagnosisResult.healthScore,
        diagnosis: diagnosisResult.problem,
        suggestions: diagnosisResult.suggestions,
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

    console.log('诊断记录已保存到云端日志:', dataId);

  } catch (error) {
    console.error('保存云端日志失败:', error);
  }
}
