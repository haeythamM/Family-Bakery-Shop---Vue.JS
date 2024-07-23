<template>
  <div id="about-us">
    <div class="section">
      <h1>About Our Bakery</h1>
      <h2>Family Bakery Shop</h2>
      <p>
        Welcome to our bakery, where we create delightful pastries and baked goods. Our passion is to provide
        high-quality treats made with love and the finest ingredients. From cakes to cookies, each item is crafted
        to perfection.
      </p>
    </div>

    <div class="section">
      <h2>Our Mission</h2>
      <p>
        At our bakery, we strive to bring joy to your taste buds. We are committed to delivering exceptional
        baked goods that not only satisfy your cravings but also create lasting memories. Your happiness is
        our mission!
      </p>
    </div>

    <div class="section">
      <h2>Meet Our Team</h2>
      <div class="team-member">
        <img src="@/assets/img/MrBeranTheBoss.jpeg" alt="Team Member 1">
        <h3>Mr Bean</h3>
        <p>Head Baker</p>
      </div>
      <div class="team-member">
        <img src="@/assets/img/Jim_Carrey.png" alt="Team Member 2">
        <h3>Mr Carrey</h3>
        <p>Pastry Chef</p>
      </div>
      <div class="team-member">
        <img src="@/assets/img/Helen Hunt.webp" alt="Team Member 3">
        <h3>Mrs Hunt</h3>
        <p>Cake Artist</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#about-us {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.section {
  margin-bottom: 30px;
}

h1,
h2,
h3 {
  color: #333;
}

p {
  color: #555;
}

.team-member {
  text-align: center;
  margin-top: 20px;
}

.team-member img {
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.team-member h3 {
  margin-bottom: 5px;
  color: #333;
}

.team-member p {
  color: #777;
}
</style>
