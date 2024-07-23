<template>
 

  <h1>Gallery</h1>
  <div class="full-menu">
    
    <div v-for="good in goods" :key="good.id" class="menu-item">
      <div class="menu-image-container">
        <img :src="good.imgUrl" :alt="good.alt" class="menu-image" />
      </div>
      <div class="menu-details">
        <h2>{{ good.name }}</h2>
        <p class="categories">Categories: {{ good.categories.join(', ') }}</p>
      </div>
    </div>
    <div v-for="item in items" :key="item.id" class="menu-item">
      <div class="menu-image-container">
        <img :src="item.imgUrl" :alt="item.alt" class="menu-image" />
      </div>
      <div class="menu-details">
        <h2>{{ item.name }}</h2>
        <p class="item">Item: {{ item.items }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { goods, items } from '@/assets/bakery-website';

export default {
  data() {
    return {
      goods,
      items,
    };
  },
};
</script>

<style scoped>
  .full-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    text-align: center;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .menu-item {
    border: 1px solid #ddd;
    background-color: #ffffff;
    margin: 10px;
    padding: 10px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .menu-item:hover {
    transform: scale(1.05);
  }

  .menu-image-container {
    overflow: hidden;
    border-radius: 5px;
  }

  .menu-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .menu-details {
    padding: 10px;
  }

  h2 {
    font-size: 1.2em;
    margin-bottom: 5px;
  }

  .categories,
  .item {
    
    font-size: 0.9em;
    color: #666;
  }
</style>
