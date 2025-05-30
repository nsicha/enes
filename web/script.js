// script.js

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {

  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeToggleBtn.textContent = '☀';  
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = '(';  
  }
});
