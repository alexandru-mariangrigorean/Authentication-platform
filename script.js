document.addEventListener('DOMContentLoaded', () => {
  const formLogin = document.getElementById('loginForm');
  const formRegister = document.getElementById('registerForm');
  const formReset = document.getElementById('resetForm');

  function clearErrors(form) {
    if (!form) return;
    const errs = form.querySelectorAll('.field-error');
    errs.forEach(e => e.remove());
  }

  function showError(inputEl, message) {
    if (!inputEl) return;
    const err = document.createElement('div');
    err.className = 'field-error';
    err.style.color = '#ffb3b3';
    err.style.fontSize = '12px';
    err.style.marginTop = '6px';
    err.textContent = message;
    const group = inputEl.closest('.input-group') || inputEl.parentElement;
    if (group) {
      group.appendChild(err);
    } else {
      inputEl.insertAdjacentElement('afterend', err);
    }
  }

  function redirectToDashboard() {
    window.location.href = 'dashbord.html';
  }


  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors(formLogin);
      const username = document.getElementById('login-username');
      const password = document.getElementById('login-password');
      let ok = true;
      if (!username || !username.value.trim()) {
        showError(username, 'Username is required');
        ok = false;
      }
      if (!password || !password.value) {
        showError(password, 'Password is required');
        ok = false;
      }
      if (ok) redirectToDashboard();
    });
  }


  if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors(formRegister);
      const username = document.getElementById('register-username');
      const password = document.getElementById('register-password');
      const confirm = document.getElementById('register-confirm');
      let ok = true;
      if (!username || !username.value.trim()) {
        showError(username, 'Username is required');
        ok = false;
      }
      if (!password || password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        ok = false;
      }
      if (!confirm || confirm.value !== (password ? password.value : '')) {
        showError(confirm, 'Passwords do not match');
        ok = false;
      }
      if (ok) redirectToDashboard();
    });
  }


  if (formReset) {
    formReset.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors(formReset);
      const username = document.getElementById('reset-username');
      const password = document.getElementById('reset-password');
      const confirm = document.getElementById('reset-confirm');
      let ok = true;
      if (!username || !username.value.trim()) {
        showError(username, 'Username is required');
        ok = false;
      }
      if (!password || password.value.length < 6) {
        showError(password, 'New password must be at least 6 characters');
        ok = false;
      }
      if (!confirm || confirm.value !== (password ? password.value : '')) {
        showError(confirm, 'Passwords do not match');
        ok = false;
      }
      if (ok) redirectToDashboard();
    });
  }
});
