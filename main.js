document.addEventListener('DOMContentLoaded', () => {
  // Hero headline
  const headline = document.querySelector('.hero__headline');
  setTimeout(() => headline.classList.add('visible'), 300);

  // Hero tilt
  const hero = document.getElementById('hero');
  const content = hero.querySelector('.hero__content');
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width/2)) / (rect.width/2);
    const dy = (e.clientY - (rect.top + rect.height/2)) / (rect.height/2);
    content.style.transform = `perspective(1200px) rotateX(${dy * -1.5}deg) rotateY(${dx * 1.5}deg)`;
  });
  hero.addEventListener('mouseleave', () => {
    content.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1)';
    content.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  });
  hero.addEventListener('mouseenter', () => { content.style.transition = 'transform 0.1s linear'; });

  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Scroll reveal for services and contact
  const reveals = document.querySelectorAll('.service, .contact');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
});