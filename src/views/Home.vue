<template>
  <div class="container home">
    <div class="home__text">
      <HeroSection />
      <ContactForm />
    </div>
    <PhoneSlider />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import HeroSection from '@/components/HeroSection'
import PhoneSlider from '@/components/PhoneSlider.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ContactForm,
    PhoneSlider
}
}
</script>

<style scoped lang="scss">
.home {
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }

  &__text {
    margin-right: auto;
  }
}
</style>
