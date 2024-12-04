// Smooth scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Handle "Learn More" button for career paths
  function learnMore(career) {
    alert(`Learn more about the ${career} role! Explore its responsibilities, growth prospects, and required skills.`);
  }
  
  // Initialize EmailJS
  emailjs.init("your_emailjs_user_id"); // Add your EmailJS User ID here
  
  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const form = event.target;
    const email = form.querySelector("#email").value;
    const message = form.querySelector("#message").value;
  
    const templateParams = {
      email: email,
      message: message,
    };
  
    emailjs.send("service_d62xfds", "template_toh2cbi", templateParams)
      .then((response) => {
        alert("Your message has been sent!");
        form.reset(); // Reset form after submission
      })
      .catch((error) => {
        alert("Oops, something went wrong. Please try again.");
      });
  });
  