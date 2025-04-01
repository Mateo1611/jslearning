// Efecto de gradiente al mover el mouse
document.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.body.style.background = `linear-gradient(135deg, rgba(${x * 255}, ${y * 255}, 100, 0.8), rgba(${y * 255}, 100, ${x * 255}, 0.8))`;
});

// Animación de aparición en secciones al hacer scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.3;

    if (sectionTop < triggerPoint) {
      section.classList.add('visible');
    }
  });
});

const toggleSwitch = document.getElementById('darkModeToggle');
  toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Espera 3 segundos y luego oculta la animación de entrada
window.addEventListener('load', function() {
  setTimeout(function() {
    const introAnimation = document.getElementById('intro-animation');
    introAnimation.style.animation = 'fadeOut 1s ease forwards';
    
    // Elimina el intro después del fade-out para permitir la interacción con el contenido
    setTimeout(function() {
      introAnimation.style.display = 'none';
    }, 1000);  // Tiempo de espera para el fade-out (1s)
  }, 3000);  // Tiempo de espera antes de iniciar el fade-out (3s)
});


  
  