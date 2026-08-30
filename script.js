document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();
});
