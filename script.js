document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  alert(`Thank you, ${name}! Your message has been received.`);
  this.reset();
});
