// IntersectionObserver to trigger the reveal effect when sections enter the viewport
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.reveal');
  
  const options = {
    root: null, // The viewport
    threshold: 0.25 // Trigger when 25% of the section is in the viewport
  };
  
  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add active class to reveal the section
        entry.target.classList.add('active');
        // Stop observing the section once it has been revealed
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe each section
  sections.forEach(section => {
    revealOnScroll.observe(section);
  });
});
// Add event listeners to the nav links to handle clicks
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink(event) {
  // Remove the active class from all links
  navLinks.forEach(link => link.classList.remove('active'));
  
  // Add the active class to the clicked link
  event.target.classList.add('active');
}

// Add event listeners for click events on the navbar links
navLinks.forEach(link => {
  link.addEventListener('click', setActiveLink);
});

// Function to handle the active link based on the section in view
function handleActiveLink(entries, observer) {
  entries.forEach(entry => {
    const id = entry.target.id; // Get the id of the section
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (entry.isIntersecting) {
      // If the section is in the viewport, add the active class
      link.classList.add('active');
    } else {
      // If the section is not in the viewport, remove the active class
      link.classList.remove('active');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Effect
    const sections = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    // Typing Effect using Typed.js
    const typingElements = document.querySelectorAll('.typing-text');
    typingElements.forEach(el => {
      const originalText = el.textContent.trim();
      el.textContent = ''; // clear text before animation

      new Typed(el, {
        strings: [originalText],
        typeSpeed: 2,
        backSpeed: 0,
        fadeOut: true,
        showCursor: false
      });
    });
  });