
// Mobile Navigation Toggle – robust und ID-unabhängig
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-toggle').forEach((btn) => {
    const headerInner = btn.closest('.header-inner');
    const nav = headerInner ? headerInner.querySelector('.site-nav') : null;
    if (!nav) return;
    btn.addEventListener('click', () => {
      nav.classList.toggle('open'); // CSS zeigt .site-nav.open
    });
  });
});
