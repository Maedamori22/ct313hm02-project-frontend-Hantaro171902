<!-- eslint-disable vue/multi-word-component-names -->
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
            <router-link to="/menu" class="nav-link mx-3 text-white fs-5">Menu</router-link>
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

  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/picture/COVER_WEB_2000x878.jpg" class="d-block w-100" alt="cover" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/picture/DIGITAL_Website_1440x460.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/picture/HC_Brand_Refresh_Master_KV_1440x460.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
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
  margin-top: 10px;
  margin-bottom: 10px;
  height: 50px;
  width: 50px;
}

.navbar-links {
  display: flex;
}

/* Media query for responsiveness */

/* Import external styles */
/* @import '@/assets/css/navbar.css'; */
</style>
