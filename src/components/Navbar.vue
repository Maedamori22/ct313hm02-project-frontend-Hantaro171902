<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <img src="@/assets/picture/White_logo800.png" alt="Logo" />
    <router-link to="/">Home</router-link>
    <router-link to="/menu">Menu</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link to="/cart">
      <img src="@/assets/cart-icon.png" alt="Cart" />
    </router-link>
    <button @click="toggleLogin">{{ isLoggedIn ? 'Logout' : 'Login' }}</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
    }
  }
};
</script>

<style scoped>
/* Add component-specific styles here */

/* Import external styles */
@import './src/asset/css/navbar.css';
</style>
