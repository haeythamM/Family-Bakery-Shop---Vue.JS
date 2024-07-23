<template>
    <div class="contact-us">
      <h1>Contact Us</h1>
  
      <div class="contact-info">
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>123 Bakery Street, Don Mills Rd, Toronto</p>
        </div>
  
        <div class="contact-item">
          <i class="fas fa-phone-alt"></i>
          <p>+1 (416) 123-1234</p>
        </div>
  
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <p>famillybakary@gmail.ca</p>
        </div>
      </div>
  
      <div v-if="!submitted" class="contact-form">
        <h2>Send us a message</h2>
  
        <form @submit.prevent="submitForm">
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />
  
          <label for="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" required />
  
          <label for="message">Your Message:</label>
          <textarea id="message" name="message" placeholder="Type your message here..." required></textarea>
  
          <button type="submit">Send Message</button>
        </form>
      </div>
  
      <div v-if="submitted" class="submitted-message">
        <p>Submitted successfully!</p>
        <p>Go to the menu or Refresh the Page Please</p>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        submitted: false,
      };
    },
    methods: {
      submitForm() {
        this.submitted = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-us {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    color: #000000;
    margin-bottom: 30px;
  }
  
  .contact-info {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }
  
  .contact-item {
    text-align: center;
  }
  
  .contact-item i {
    font-size: 24px;
    color: #3498db;
    margin-bottom: 10px;
  }
  
  .contact-form {
    background-color: #267365;
    padding: 3rem 6rem;
    border-radius: 8px;
    
  }
  
  h2 {
    color: #333;
    margin-bottom: 20px;
  }
  
  form {
    display: grid;
    gap: 20px;
  }
  
  label {
    color: #333;
  }
  
  input,
  textarea {
    width: 40rem;
    padding: 10px;
    border: 1px solid #919191;
    border-radius: 4px;
    max-width: 100%;
  }
  
  button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2186c4;
  }
  .submitted-message{
    background-color: green;
    color: white;
    padding: 1rem;
  }
  </style>
  