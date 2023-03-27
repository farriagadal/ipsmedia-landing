<template>
  <div class="container">
    <HeroSection />
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import HeroSection from '@/components/HeroSection'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ContactForm
}
}
</script>

<style scoped lang="scss">
/* div {
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #EEECEC;
} */
</style>
