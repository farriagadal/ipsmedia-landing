<template>
  <button @click="$emit('click')" class="gradient-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'GradientButton',
};
</script>

<style scoped lang="scss">
.gradient-button {
  display: block;
  position: relative;
  border-radius: 6px;
  border: 1px solid #861b59;
  padding: 16px 35px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  margin-top: 16px;
  color: #EEECEC;
  cursor: pointer;
  overflow: hidden;
  background: none;

  @media (max-width: 768px) {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #370C14 0%, #280C23 100%);
    border-radius: 6px;
    transition: opacity 0.2s ease-in-out;
    z-index: -1;
  }

  &:hover::before,
  &:active::before {
    opacity: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #62051C 0%, #440C3A 100%);
    border-radius: 6px;
    z-index: -2;
  }
}
</style>
