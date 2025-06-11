// Hamburger menu logic
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');

if (hamburger && closeMenu && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    closeMenu.classList.add('active');
    hamburger.style.display = 'none';
    document.body.classList.add('menu-open');
  });

  closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeMenu.classList.remove('active');
    hamburger.style.display = 'inline-block';
    document.body.classList.remove('menu-open');
  });
}

// Optional: Expand effect on search bar hover
const searchContainers = document.querySelectorAll('.search-container');
searchContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    container.classList.add('active');
  });
  container.addEventListener('mouseleave', () => {
    container.classList.remove('active');
  });
});
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeMenu.classList.remove('active');
    hamburger.style.display = 'inline-block';
    document.body.classList.remove('menu-open');
  });
});
