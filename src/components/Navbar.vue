<template>
  <nav class="navbar navbar-expand-md navbar-dark bg">
    <div class="container-fluid">
      <router-link to="/"
        ><img class="navbar-brand ms-3" src="@/assets/picture/White_logo800.png" alt="Logo"
      /></router-link>

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline" type="submit">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link mx-3 text-white fs-5">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/menu.vue" class="nav-link mx-3 text-white fs-5">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link mx-3 text-white fs-5">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link mx-3">
              <button class="btn btn-outline-light">
                <i class="fa fa-shopping-cart"></i>
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <button @click="toggleLogin" class="btn btn-outline-light">
              {{ isLoggedIn ? 'Logout' : 'Login' }}
            </button>
          </li>
        </ul>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <i class="fa fa-bars"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      slickOptions: {
        // Customize Slick settings here
        dots: true,
        speed: 500
        // Add more settings as needed
      }
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bg {
  background-color: #b22830;
}

.navbar-brand {
  /* Style for logo or brand content */
  margin-top: 10px;
  margin-bottom: 10px;
  height: 50px;
  width: 50px;
}

.navbar-links {
  display: flex;
}
</style>
