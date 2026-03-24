function loadSection(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // Re-run animation after loading
      revealElements();
    });
}

loadSection("about", "sections/about.html");
loadSection("projects", "sections/projects.html");
loadSection("services", "sections/services.html");
loadSection("contact", "sections/contact.html");

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

/* SCROLL ANIMATION */
function revealElements() {
  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 150); // stagger effect
      }
    });
  });

  elements.forEach(el => observer.observe(el));
}