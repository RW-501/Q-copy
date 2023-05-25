// main.js
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const auth = getAuth();
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
      // You can redirect to another page or perform other actions here
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Sign up error:', errorCode, errorMessage);
      // Handle the error and display an appropriate message to the user
    });
});
