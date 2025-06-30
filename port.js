// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
    });
  });
  
  
