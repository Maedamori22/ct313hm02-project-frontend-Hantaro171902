<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      const credentials = {
        u_name: this.username,
        u_password: this.password
      };

      try {
        const { success, data, error } = await this.$usersService.loginUser(credentials);

        if (success) {
          // Handle successful login
          console.log('Login successful!', data);
        } else {
          // Handle login error
          console.error('Login failed', error);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  }
};
</script>
