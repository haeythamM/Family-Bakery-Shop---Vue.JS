
<template>
  
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/gallery">Gallery</router-link> |
    <router-link to="/full-menu">Full Menu</router-link> |
    <router-link to="/Categories">Categories</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact Us</router-link>
    <template>
</template>
  </nav>
  <router-view/>
</template>
<style>

body{
  margin: 0;
  padding: 0;
  background-color: #ffe0a7;
}
#app {
 
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b952;
}
</style>
