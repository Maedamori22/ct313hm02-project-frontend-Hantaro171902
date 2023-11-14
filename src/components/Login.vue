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
      try {
        const credentials = {
          u_name: this.username,
          u_password: this.password
        };

        const response = await this.$usersService.loginUser(credentials);

        if (response.ok) {
          // Handle successful login
          const data = await response.json();
          console.log('Login successful!', data);
        } else {
          // Handle login error
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  }
};
</script>
