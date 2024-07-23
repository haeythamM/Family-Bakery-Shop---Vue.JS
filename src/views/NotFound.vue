<template>
    <div class ="error">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <div class="errorImg">
        <img alt="error" src="@/assets/img/error-icon.png" width="200">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style scoped>
 .error{
  padding: 1rem;
  background-color: red;
  color: white;
 }
  </style>
  