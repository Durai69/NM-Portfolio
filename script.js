// Intro overlay logic
window.addEventListener("load", () => {
  const overlay = document.getElementById("intro-overlay");
  setTimeout(() => {
    overlay.style.opacity = 0;
    setTimeout(() => {
      overlay.style.display = "none";
    }, 1000); // Wait for fade-out transition
  }, 2000); // Show overlay for 2 seconds
});

AOS.init({
  duration: 1000,
  once: true
});

// Smooth scroll and nav active highlighting
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
    }
  });
});
