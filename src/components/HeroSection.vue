<template>
  <div>
    <label>New Course</label>
    <h1>iPhone Photo <br>Academy</h1>
    <p>Sign up now to get notified <br>when this course is available!</p>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped lang="scss">
div {
  text-align: left;
}

label {
  width: fit-content;
  align-items: center;
  padding: 8px 19px;
  height: 28px;
  background: #2B5341;
  border-radius: 32px;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #EEECEC;
}

h1 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 63px;
  line-height: 63px;
  color: #EEECEC;
  margin: 0;
  margin-top: 25px;


  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
}

p {
  font-size: 22px;
  line-height: 30px;
  color: #EEECEC;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 30px;
  }
}
</style>
