<template>
  <div class="container">
    <img src="../assets/images/ips-logo.svg">
  </div>
</template>

<script>

export default {
  name: 'NavBar'
};
</script>

<style scoped lang="scss">
div {
  margin-top: 62px;
  margin-bottom: 181px;

  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 120px;

    img {
      display: none;
    }
  }
}
</style>
