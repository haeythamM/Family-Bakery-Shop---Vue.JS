<template>
    <div class="full-menu">
      <h1>Categories</h1>
  <!-- using v-for to fetch the array -->
      <div v-for="good in goods" :key="good.id" class="menu-item">
        <img :src="good.imgUrl" :alt="good.alt" class="menu-image" />
        <div class="menu-details">
          <h2>{{ good.name }}</h2>
          <p class="categories">Categories: {{ good.categories.join(', ') }}</p>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  import { goods } from '@/assets/bakery-website';
    // importing only goods from array   
  export default {
    data() {
      return {
        goods,
      };
    },
  };
  </script>
  
  <style scoped>
  .full-menu {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .menu-item {
    margin-bottom: 20px;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .menu-item:hover {
    transform: scale(1.05);
  }
  
  .menu-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .menu-details {
    padding: 16px;
    background-color: #f9f9f9;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
  }
  
  h2 {
    color: #333;
  }
  
  .categories, .item {
    color: #777;
  }
  
  </style>
  