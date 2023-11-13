<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar />

  <!-- Banner Home  -->
  <div id="bannerHome" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#bannerHome"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#bannerHome"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#bannerHome"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="@/assets/picture/HLC_x_Vani_Banner_website.png"
          alt=""
          loading="lazy"
          class="img-fluid"
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/picture/DIGITAL_Website_1440x460.jpg"
          alt=""
          loading="lazy"
          class="img-fluid"
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/picture/HC_Brand_Refresh_Master_KV_1440x460.png"
          alt=""
          loading="lazy"
          class="img-fluid"
        />
      </div>
      <div class="carousel-item">
        <img src="@/assets/picture/Love.png" alt="" loading="lazy" class="img-fluid" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/picture/Passion.png" alt="" loading="lazy" class="img-fluid" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/picture/Respect.png" alt="" loading="lazy" class="img-fluid" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/picture/Support-update_2.png" alt="" loading="lazy" class="img-fluid" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#bannerHome"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#bannerHome"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="bannerHome right hidden-sm d-md-block">
    <div class="img">
      <a
        href="https://www.highlandscoffee.com.vn/vn/24-nam-chung-minh-highlands-co-phin-sua-da-19k.html"
        onmousedown="return rwt(this,'advertise',189)"
        target="_blank"
        ><img
          src="@/assets/picture/HCO-7723-24TH-BIRTHDAY-DIGITAL-2000X878.jpg"
          alt=""
          class="img-fluid"
      /></a>
    </div>
    <div class="captionWrap">
      <div class="wrapper"></div>
    </div>
  </div>

  <div class="bannerHome left hidden-sm d-md-block">
    <div class="img">
      <a
        href="https://www.highlandscoffee.com.vn/vn/thom-qua-mong-ngot-anh-dao-bo-doi-tra.html"
        onmousedown="return rwt(this,'advertise',187)"
        target="_blank"
        ><img
          src="@/assets/picture/HCO_7719_CHERRY_BERRY_DIGITAL-Banner_820x3602x.png"
          alt=""
          class="img-fluid"
      /></a>
    </div>
    <div class="captionWrap">
      <div class="wrapper"></div>
    </div>
  </div>

  <div class="bannerHome right hidden-sm d-md-block">
    <div class="img">
      <a
        href="https://www.highlandscoffee.com.vn/vn/kemdi-the-he-kem-moi-cua-highlands-coffee.html"
        onmousedown="return rwt(this,'advertise',183)"
        target="_blank"
        ><img src="@/assets/picture/COVER_WEB_2000x878.jpg" alt="" class="img-fluid"
      /></a>
    </div>
    <div class="captionWrap">
      <div class="wrapper"></div>
    </div>
  </div>
</template>

<style scoped>
/* Import external styles */
@import 'src/components/css/home.css';
</style>
