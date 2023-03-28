<template>
  <div class="container thanks">
    <div>
      <h1>Thank You!</h1>
      <p>You will get notified when iPhone <br>Photo Academy becomes available</p>
      <GradientButton>Subscribe To Our Youtube Channel</GradientButton>
    </div>
  </div>
</template>

<script>
import GradientButton from '@/components/GradientButton.vue'

export default {
  name: 'ThanksView',

  components: {
    GradientButton
  }
}
</script>

<style scoped lang="scss">
.thanks {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;


  h1 {
    font-family: 'Montserrat';
    font-size: 32px;
    font-weight: 400;
    line-height: 48px;
    text-align: center;
    color: #EEECEC;
    margin: 0;
  }

  p {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #EEECEC;
    margin: 0;
    margin-bottom: 16px;
  }

  button {
    margin: auto;
  }
}

</style>
