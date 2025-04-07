​document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    document.getElementById('formResponse').textContent = `Thank you, ${name}! We'll get back to you soon.`;
    this.reset();
  } else {
    document.getElementById('formResponse').textContent = 'Please fill out all fields.';
    document.getElementById('formResponse').style.color = 'red';
  }
});