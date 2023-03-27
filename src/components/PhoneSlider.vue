<template>
  <div class="slider" :style="cssVars">
    <img class="slider__shadow" src="../assets/images/ambient-background.png" alt="phone">
    <img class="slider__bg" src="../assets/images/iPhone-mokup.svg" alt="phone">
    <Splide
      ref="splide"
      :options="options"
      aria-label="My Favorite Images"
      @splide:move="onChange"
    >
      <SplideSlide v-for="item in items" :key="item.id">
        <img :src="item.src" :alt="item.alt">
      </SplideSlide>
    </Splide>
    <img
      class="slider__small"
      :src="items[previousSlide].smallPhoto"
      @click="$event => $refs.splide.go(previousSlide)"
      alt="phone"
    >
    <button
      class="slider__nextBtn"
      @click="$event => $refs.splide.go(nextSlide)"
    ></button>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  name: 'PhoneSlider',
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      items: [
        {
          src: require('../assets/images/carousel-photo-01.jpg'),
          smallPhoto: require('../assets/images/small-carousel-photo-01.jpg'),
          alt: 'Sample 1',
        },
        {
          src: require('../assets/images/carousel-photo-02.jpg'),
          smallPhoto: require('../assets/images/small-carousel-photo-02.jpg'),
          alt: 'Sample 2',
        },
        {
          src: require('../assets/images/carousel-photo-03.jpg'),
          smallPhoto: require('../assets/images/small-carousel-photo-03.jpg'),
          alt: 'Sample 3',
        },
        {
          src: require('../assets/images/carousel-photo-04.jpg'),
          smallPhoto: require('../assets/images/small-carousel-photo-04.jpg'),
          alt: 'Sample 4',
        },
      ],
      options: {
        autoplay: true,
        interval: 8000,
        arrows: false,
        type: 'loop',
        drag: true,
        dragMinThreshold: 200,
        flickPower: 50
      },
      currentSlide: 0,
    }
  },
  methods: {
    onChange(splide, prev, next) {
      console.log(splide, prev, next);
      this.currentSlide = prev;
    }
  },
  computed: {
    previousSlide () {
      return this.currentSlide === 0 ? this.items.length - 1 : this.currentSlide - 1;
    },
    nextSlide () {
      return this.currentSlide === this.items.length - 1 ? 0 : this.currentSlide + 1;
    },
    cssVars() {
      return {
        '--n-items': this.items.length,
      }
    }
  }
}
</script>

<style lang="scss">
.slider {
  width: 335px;
  /* width: calc(335px - 20px); */
  height: 695px;
  margin-top: -145px;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }

  &__bg {
    position: absolute;
    transform: scaleY(0.99);
  }

  &__small {
    position: absolute;
    bottom: 77px;
    left: 26px;
    transform: scale(1.05);
    cursor: pointer;
    border-radius: 3px;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__nextBtn {
    /* border: solid; */
    border: none;
    background: none;
    cursor: pointer;
    position: absolute;
    bottom: 67px;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transition: 0.4s;

    &:hover {
      background: black;
      opacity: 0.2;
    }
    &:active {
      background: black;
      opacity: 0.5;
    }
  }

  &__shadow {
    position: absolute;
    top: -170px;
    left: -200px;
  }
}

.splide {
  height: 100%;
}

.splide__slide {
  text-align: center;
  margin-top: 117px;
}

.splide__track {
  width: 306px;
  margin-left: 15px;

  img {
    cursor: pointer;
  }
}

.splide__pagination  {
  position: absolute;
  bottom: -30px;
  display: grid;
  grid-template-columns: repeat(var(--n-items), 1fr);
  gap: 8px;
  padding: 0 45px;
}

.splide__pagination__page {
  height: 1px;
  background: #3A3A3A;
  width: 100%;

  &.is-active {
    transform: none;
  }
}
</style>
