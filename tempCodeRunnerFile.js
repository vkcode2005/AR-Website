// Firebase config (apne project ka config daal)
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
  
//   // Form submit logic
//   document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const formData = {
//       name: this.name.value,
//       email: this.email.value,
//       message: this.message.value,
//       timestamp: new Date()
//     };
  
//     db.collection('messages').add(formData)
//       .then(() => {
//         alert('Message sent successfully!');
//         this.reset();
//       })
//       .catch(error => {
//         console.error('Error sending message:', error);
//         alert('Error sending message.');
//       });
//   });