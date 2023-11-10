<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-expand-md navbar-dark bg">
    <div class="container-fluid">
      <img class="navbar-brand fs-3 ms-3" src="@/assets/picture/White_logo800.png" alt="Logo" />

      <div class="collapse navbar-collapse" id="btn">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link mx-3">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/menu" class="nav-link mx-3">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link mx-3">About Us</router-link>
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
    </div>
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
/* Navbar styles */
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
  height: 100px;
  width: 100px;
}

.navbar-links {
  display: flex;
}

.router-link {
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
  cursor: pointer;
}

.navbar-auth {
  /* Style for authentication button or icon */
}

/* Media query for responsiveness */
@media (max-width: 768px) {
  .navbar-links {
    flex-direction: column;
    align-items: center;
  }

  .router-link {
    margin: 10px 0;
  }
}

/* Import external styles */
/* @import '@/assets/css/navbar.css'; */
</style>
