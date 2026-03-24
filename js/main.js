/* ============================================
   MANRIFZ Web Design — Scroll Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  // Intersection Observer for fade-in animations
  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  var fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  // Stagger animation for grid children
  var grids = document.querySelectorAll('.servicios-grid, .portafolio-grid, .resenas-grid');
  grids.forEach(function (grid) {
    var cards = grid.querySelectorAll('.fade-in');
    cards.forEach(function (card, index) {
      card.style.transitionDelay = (index * 0.12) + 's';
    });
  });

  // Stagger for process steps
  var steps = document.querySelectorAll('.proceso-step.fade-in');
  steps.forEach(function (step, index) {
    step.style.transitionDelay = (index * 0.1) + 's';
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Toggle testimonial form
  var btnCompartir = document.getElementById('btn-compartir');
  var formWrapper = document.getElementById('resena-form-wrapper');
  if (btnCompartir && formWrapper) {
    btnCompartir.addEventListener('click', function () {
      if (formWrapper.style.display === 'none') {
        formWrapper.style.display = 'block';
        var formFadeIn = formWrapper.querySelector('.fade-in');
        if (formFadeIn) {
          setTimeout(function () {
            formFadeIn.classList.add('visible');
          }, 50);
        }
        formWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        formWrapper.style.display = 'none';
      }
    });
  }
});
