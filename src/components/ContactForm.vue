<template>
  <div>
    <input type="text" placeholder="Enter your Email Address">
    <button>Please Notify Me</button>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped lang="scss">
div {
  text-align: left;
  display: block;

  input {
    background: #171715;
    border: 1px solid #3A3A3A;
    border-radius: 6px;
    height: 62px;
    max-width: 423px;
    width: 100%;
    padding: 0 16px;
    color: #EEECEC;

    &:focus {
      outline: none;
    }

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #EEECEC;
    }
  }

  button {
    display: block;
    background: linear-gradient(135deg, #370C14 0%, #280C23 100%);
    border-radius: 6px;
    border: 1px solid #861b59;
    padding: 16px 35px;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    margin-top: 16px;
    color: #EEECEC;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover, &:active {
      background: linear-gradient(135deg, #62051C 0%, #440C3A 100%);
    }
  }
}
</style>
