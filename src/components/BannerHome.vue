<template>
  <div class="banner-home">
    <img src="@/assets/banner-image.png" alt="Banner" class="banner-image" />
    <h1 class="banner-title">SISTEMA DE INFORMACIÓN ADSO SENA 2025</h1>
  </div>
</template>

<!-- <script>
export default {
  name: 'BannerHome',
}
</script> -->

<style scoped>
.banner-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  /* background-color: #f5f5f5; */
}

.banner-image {
  max-width: 50%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
}

.banner-title {
  font-size: 2rem;
  font-weight: bold;
  color: #707070;
}
</style>
