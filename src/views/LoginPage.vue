<template>
  <div>
    <Login @login="handleLogin" />
  </div>
</template>

<script>
import Login from '@/components/Login.vue';

export default {
  components: {
    Login
  },
  methods: {
    handleLogin(credentials) {
      // Call a method to send the login credentials to the backend
      this.$emit('login', credentials);
    }
  }
};
</script>
