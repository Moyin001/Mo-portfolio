// aos animation
AOS.init({
  offset: 120,
  delay: 0,
  duration: 800,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

// menu toggle logic
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const mobileClose = document.getElementById('mobile-close');

// Open mobile nav
menuToggle.addEventListener('click', () => {
  mobileNav.classList.remove('translate-x-full');
  mobileNav.classList.add('translate-x-0');
  menuToggle.setAttribute('aria-expanded', true);
});

// Close on close button
mobileClose.addEventListener('click', () => {
  closeMobileNav();
});

// Close on link click inside nav
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileNav();
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (
    !mobileNav.contains(e.target) &&
    !menuToggle.contains(e.target) &&
    !mobileNav.classList.contains('translate-x-full') // only if open
  ) {
    closeMobileNav();
  }
});

// Function to close menu
function closeMobileNav() {
  mobileNav.classList.remove('translate-x-0');
  mobileNav.classList.add('translate-x-full');
  menuToggle.setAttribute('aria-expanded', false);
}
