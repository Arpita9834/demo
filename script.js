// Encrypt contact form data before "sending"
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Field validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const secretKey = "cloudalpha-secret-key"; // Your chosen AES key

  // Encrypt email and message
  const encryptedEmail = CryptoJS.AES.encrypt(email, secretKey).toString();
  const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();

  console.log("Encrypted Email:", encryptedEmail);
  console.log("Encrypted Message:", encryptedMessage);

  alert("Your data is encrypted before being sent!");

  // Simulate sending (optional: add backend here)
  // Clear form fields
  document.getElementById('contact-form').reset();
});


// Sticky Notes "Tear" Animation
const notes = document.querySelectorAll('.sticky-note');
const button = document.getElementById('tearNote');
let currentIndex = 0;

button.addEventListener('click', () => {
  notes[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % notes.length;
  notes[currentIndex].classList.add('active');
});
