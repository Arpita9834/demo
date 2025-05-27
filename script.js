// Projects data
const projects = [
  {
    title: "Detecting Data Leaks",
    desc: "Cloud system with AES-256 encryption and double-layer SQL injection protection."
  },
  {
    title: "Cloud-Based Bus Pass",
    desc: "Online ticket system preventing ticket loss and ensuring smooth traffic via cloud scaling."
  },
  {
    title: "AI-Powered Chatbot",
    desc: "Real-time interactive chatbot using retrieval/generative AI for websites."
  }
];

let currentProject = 0;
const board = document.getElementById("projectBoard");
const title = document.getElementById("projectTitle");
const desc = document.getElementById("projectDesc");

// Function to show next project with animation
function nextProject() {
  board.classList.add("tear-effect");
  setTimeout(() => {
    currentProject = (currentProject + 1) % projects.length;
    title.textContent = projects[currentProject].title;
    desc.textContent = projects[currentProject].desc;
    board.classList.remove("tear-effect");
  }, 1000);
}

// Encrypt contact form data before "sending"
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate fields
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const secretKey = "cloudalpha-secret-key"; // Your chosen AES key

  // Encrypt email and message using CryptoJS AES
  const encryptedEmail = CryptoJS.AES.encrypt(email, secretKey).toString();
  const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();

  console.log("Encrypted Email:", encryptedEmail);
  console.log("Encrypted Message:", encryptedMessage);

  alert("Your data is encrypted before being sent!");

  // Clear form fields
  document.getElementById('contact-form').reset();
});
