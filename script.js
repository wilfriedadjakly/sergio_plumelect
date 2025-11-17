// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const mobileToggle = document.getElementById('mobileToggle');
  const navlinks = document.querySelector('.navlinks');
  mobileToggle && mobileToggle.addEventListener('click', () => {
    if (navlinks.style.display === 'flex') navlinks.style.display = '';
    else navlinks.style.display = 'flex';
  });

 

const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  formMsg.textContent = "Sending...";

  const formData = new FormData(form);

  // Send to Web3Forms
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const result = await response.json();

  if (result.success) {
    formMsg.textContent = "Your request has been sent! We will contact you shortly.";
    form.reset();
  } else {
    formMsg.textContent = "Error sending message. Please try again.";
  }
});



  // Quote button behaviour
  const quoteBtn = document.getElementById('quoteBtn');
  quoteBtn && quoteBtn.addEventListener('click', () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({behavior:'smooth'});
  });
});