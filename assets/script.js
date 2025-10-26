// Revelação ao rolar
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();

// Botão "voltar ao topo"
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.remove("opacity-100", "visible");
    backToTopButton.classList.add("opacity-0", "invisible");
  }
});
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const navLinks = document.getElementById('nav-links');

if (mobileMenuButton && navLinks) {
  mobileMenuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('menu-open');

    if (isOpen) {
      navLinks.classList.remove('menu-open', 'flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-[var(--color5)]', 'bg-opacity-95', 'backdrop-blur-md', 'py-4', 'px-6', 'space-y-4', 'shadow-lg');
      navLinks.classList.add('hidden', 'md:flex', 'space-x-8');
      navLinks.querySelectorAll('a').forEach(link => link.classList.remove('block', 'text-center', 'py-2'));
      mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    } else {
      navLinks.classList.add('menu-open', 'flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-[var(--color5)]', 'bg-opacity-95', 'backdrop-blur-md', 'py-4', 'px-6', 'space-y-4', 'shadow-lg');
      navLinks.classList.remove('hidden', 'md:flex', 'space-x-8');
      navLinks.querySelectorAll('a').forEach(link => link.classList.add('block', 'text-center', 'py-2'));
      mobileMenuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('menu-open')) mobileMenuButton.click();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && navLinks.classList.contains('menu-open')) mobileMenuButton.click();
  });
}
