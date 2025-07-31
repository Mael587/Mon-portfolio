// Gestion du mode sombre
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Bouton de retour en haut 
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Affiche ou cache le bouton selon la position scrollée
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Au clic, remonte vers le haut
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Animation de bienvenue
document.addEventListener("DOMContentLoaded", () => {
  const data = [
    { id: "welcome-title", text: "Bienvenue sur mon Portfolio" },
    { id: "welcome-desc", text: "Découvrez mes projets et mes passions." },
  ];

  const btn = document.getElementById("welcome-btn");
  btn.style.opacity = 0; 

  // Fonction pour afficher du texte caractère par caractère
  function typeWriter(element, text, delay = 200) {
    return new Promise((resolve) => {
      let i = 0;

      function typing() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typing, delay);
        } else {
          resolve();
        }
      }

      typing();
    });
  }

  // Animation complète d'affichage du texte de bienvenue
  async function animateWelcome() {
    for (const item of data) {
      const el = document.getElementById(item.id);
      await typeWriter(el, item.text, 100);
    }

    // Une fois terminé, faire apparaître le bouton en fondu
    btn.style.transition = "opacity 2s ease-in-out";
    btn.style.opacity = 1;
  }

  animateWelcome();
});

