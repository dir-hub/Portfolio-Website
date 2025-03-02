const scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
const elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

// Smooth scroll function
const headerBtn = document.getElementById("header-btn");
const socialContact = document.getElementById("social-contact");
const contactForm = document.getElementById("contact");

function scrollToForm() {
  contactForm.scrollIntoView({ behavior: "smooth" }); // Top
}

headerBtn.addEventListener("click", scrollToForm);
socialContact.addEventListener("click", scrollToForm);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLinks[index].classList.add('active');
      }
  });
});
// No bots!
const contactFormNoBots = document.getElementById("contact-form-no-bots");
contactFormNoBots.parentNode.removeChild(contactFormNoBots);
function goToPage1() {
  window.open("https://github.com/dir-hub/zomato-page","_blank"); 
}
document.getElementById("liveBtn").addEventListener("click", function() {
  window.open("https://dir-hub.github.io/zomato-page/", "_blank");
});
document.getElementById("login-repo").addEventListener("click", function() {
  window.open("https://github.com/dir-hub/Student-Log-In-Webpage", "_blank");
});
document.getElementById("login-live").addEventListener("click", function() {
  window.open("https://dir-hub.github.io/Student-Log-In-Webpage/", "_blank");
});
document.getElementById("converter-repo").addEventListener("click", function() {
  window.open("https://github.com/dir-hub/Currency_Converter", "_blank");
});
document.getElementById("converter-live").addEventListener("click", function() {
  alert("Sorry, this feauture is not available yet!");
});
document.getElementById("hangman-live").addEventListener("click", function() {
  alert("Sorry, this feauture is not available yet!");
});
document.getElementById("hangman-repo").addEventListener("click", function() {
  window.open("https://github.com/dir-hub/Hangman-Game", "_blank");
});
document.addEventListener("DOMContentLoaded", function () {
  // Remove the bots field
  const contactFormNoBots = document.getElementById("contact-form-no-bots");
  if (contactFormNoBots) {
      contactFormNoBots.parentNode.removeChild(contactFormNoBots);
  }

  // Form submission handling
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent default submission
          alert("Your message has been sent! We will reach you soon!");
          contactForm.reset(); // Clear form fields
      });
  }
});
