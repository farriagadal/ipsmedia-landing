<template>
  <div class="contact">
    <div class="contact__input">
      <label :class="{ active: isActive }">
        <span v-if="!hasError">Enter your Email Address</span>
        <span v-else class="error">Please enter a valid email</span>
      </label>
      <input
        type="text"
        :class="{ error: hasError }"
        v-model="email"
        @input="validateEmail"
        @focus="inputActive = true"
        @blur="inputActive = false"
      />
      <img src="~@/assets/images/send-icon.svg" alt="send" />
    </div>
    <GradientButton @click="submitForm">Please Notify Me</GradientButton>
  </div>
</template>

<script>
import GradientButton from '@/components/GradientButton.vue';

export default {
  name: 'ContactForm',
  components:{
    GradientButton
  },
  data() {
    return {
      email: '',
      hasError: false,
      inputActive: false,
    };
  },
  computed: {
    isActive() {
      return this.email.length > 0 || this.inputActive;
    },
  },
  methods: {
    validateEmail() {
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (this.email === '') {
        this.hasError = false;
      } else {
        this.hasError = !emailPattern.test(this.email);
      }
    },
    submitForm() {
      this.validateEmail();
      if (this.email !== '' && !this.hasError) {
        this.$router.push('/thanks');
      } else {
        this.hasError = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.contact {
  text-align: left;
  display: block;

  &__input {
    position: relative;
    width: 100%;
    max-width: calc(423px);

    label {
      position: absolute;
      top: 20px;
      left: 17px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #EEECEC;
      transition: 0.2s;
      pointer-events: none;

      &.active {
        font-size: 12px;
        color: #3A3A3A;
        top: 8px;
      }

      span.error {
        color: #D41C3D;
      }
    }

    input {
      background: #171715;
      border: 1px solid #3A3A3A;
      border-radius: 6px;
      max-height: 62px;
      width: stretch;
      padding: 25px 16px 15px 16px;
      color: #EEECEC;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #EEECEC;
      }

      &.error {
        border-color: #D41C3D;
      }
    }
    img {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
}
</style>
