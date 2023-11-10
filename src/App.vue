<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar />

  <div class="container mt-3">
    <router-view />
  </div>
</template>

<style>
/* Add global styles if needed */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
