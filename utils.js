function showLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.disabled = true;
    element.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>处理中...';
  }
}

// 隐藏加载状态
function hideLoading(elementId, originalText) {
  const element = document.getElementById(elementId);
  if (element) {
    element.disabled = false;
    element.innerHTML = originalText;
  }
}

// 显示提示弹窗
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast position-fixed ${type === 'success' ? 'text-bg-success' : 'text-bg-danger'} 
                      top-0 end-0 m-3 p-3 rounded shadow-lg`;
  toast.textContent = message;
  toast.style.zIndex = '9999';
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s';
    setTimeout(() => document.body.removeChild(toast), 500);
  }, 3000);
}

// 简单的表单验证
function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[required], select[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('is-invalid');
      // 添加验证提示
      const feedback = document.createElement('div');
      feedback.className = 'invalid-feedback';
      feedback.textContent = '此项为必填项';
      input.parentNode.appendChild(feedback);
      
      // 输入时移除错误提示
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
        if (feedback) feedback.remove();
      });
    }
  });

  return isValid;
}