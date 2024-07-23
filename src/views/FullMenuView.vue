<template>
  <div class="full-menu">
    <h1>Full Menu</h1>
    <div v-for="item in items" :key="item.id" class="menu-item">
      <img :src="item.imgUrl" :alt="item.alt" class="menu-image" />
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
