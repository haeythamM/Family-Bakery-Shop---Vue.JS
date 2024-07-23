<template>
  <div>
    <AppHeader></AppHeader>

    <div class="home">
      <div class="banner">
        <h1>Welcome to Our Bakery</h1>
        <p>Delicious treats made just for you</p>
      </div>

      <div class="paragraph">
        <h2>Elevating Happiness Through Quality Baking</h2>
        <h3><i>Family Bakery Shop</i></h3>
        <p>
          Step into our bakery, where each creation is a symphony of flavors, crafted with meticulous care. Our
          commitment to quality ingredients is unwavering, resulting in pastries, bread, and confections that
          transcend the palate.
        </p>

        <p>
          Experience the joy of savoring a moment—nourishment for the soul. Our warm ambiance, friendly service,
          and genuine care create an atmosphere where happiness is shared.
        </p>

        <p>
          Beyond the delightful treats, we believe in forging connections. Breaking bread together fosters
          community, turning strangers into friends and friends into family.
        </p>

        <p>
          Our dedication to quality extends to sustainability. Mindfully sourced ingredients and responsible
          practices ensure that every bite is a conscious choice for a better, happier world.
        </p>

        <p>
          Welcome to a world where good quality baking is an art, a science, and a celebration of the simple joys
          that make life beautiful. Join us on a joyful journey where every bite is a step closer to happiness.
        </p>
      </div>

      <div class="bread-img">
        <img alt="Bread" src="@/assets/img/bakery.jpg" width="700">
      </div>
    </div>

    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Just+Another+Hand&display=swap');
* {
  margin: 0;
  padding: 0;
}

#App {
  padding: 0;
  margin: 0;
 
}

.home {
  text-align: center;
  margin-bottom: 3rem;

}
h3{
  font-stretch: condensed;
  padding:  14px;;
}
.banner {
  margin-top: 20px;
  padding: 50px;
  background-color: #267365; 
}

.paragraph {
  
  border: #267365 10px solid;
  background-color: #f9f7f7; 
  padding: 3rem;
  margin: 0.5rem 0.5rem 3rem;
}

h2, p , h1 {
  color: #000000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
p{
  font-size: 2rem;
  font-family: 'Just Another Hand', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bread-img {
  padding: 10px;
  margin-bottom: 3rem;
}
</style>
