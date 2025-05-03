const sliders = document.querySelectorAll('.slide-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

sliders.forEach(slide => {
  appearOnScroll.observe(slide);
});
