const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
app.use(express.json());
app.use(morgan("dev"));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// Register route
app.post("/register", (req, res) => {
  const { email } = req.body;
  console.log("email:", email);
  const verificationCode = generateVerificationCode(); // Generate a verification code
  // saveVerificationCode(email, verificationCode); // Save the code in the database (e.g., using MongoDB)

  sendVerificationEmail(email, verificationCode)
    .then(() => {
      res.send("Verification email sent. Please check your inbox.");
    })
    .catch((error) => {
      console.error("Error sending verification email:", error);
      res.status(500).send("Failed to send verification email.");
    });
});

// Verify route
app.get("/verify", (req, res) => {
  const { email, code } = req.query;
  const storedCode = getVerificationCode(email); // Retrieve the code from the database

  if (storedCode === code) {
    markEmailAsVerified(email); // Update the user's email as verified in the database
    res.send("Email successfully verified.");
  } else {
    res.send("Invalid verification code.");
  }
});

// Helper functions
function generateVerificationCode() {
  // Generate a random verification code or use a hash function
  // Return the code as a string
  return "ABC123";
}

// function saveVerificationCode(email, code) {
//   // Save the verification code in the database
// }

function sendVerificationEmail(email, code) {
  return new Promise((resolve, reject) => {
    // SMTPJS configuration
    const config = {
      host: "smtp.elasticemail.com",
      username: "taoxinma01@gmail.com",
      password: "5759A43F7825FDC714754B2452465114EE0F",
      fromEmail: "taoxinma01@gmail.com",
      fromName: "Hung Pro",
      toEmail: email,
      subject: "Email Verification",
      body: `Your verification code is: ${code}`,
    };

    // Send email using SMTPJS
    Email.send({
      ...config,
      SecureToken: "34cf41df-d7e0-476e-ac1b-a0247aeee1b2", // Secure token generated from SMTPJS.com
      onSuccess: resolve,
      onError: reject,
    });
  });
}

function getVerificationCode(email) {
  // Retrieve the verification code from the database based on the email
  // Return the code as a string or null if not found
  return "ABC123";
}

function markEmailAsVerified(email) {
  // Update the user's email as verified in the database
}

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
