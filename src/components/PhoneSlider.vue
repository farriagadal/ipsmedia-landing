<template>
  <div class="slider" :style="cssVars">
    <img class="slider__shadow" :srcset="`${items[currentSlide].src1},
      ${items[currentSlide].src2} 2x,
      ${items[currentSlide].src3} 3x`"
      :alt="items[currentSlide].alt"
    >
    <img class="slider__bg" src="../assets/images/iPhone-mokup.svg" alt="phone">
    <Splide
      ref="splide"
      :options="options"
      aria-label="My Favorite Images"
      @splide:move="onChange"
    >
      <SplideSlide v-for="item in items" :key="item.id">
        <img :srcset="`${item.src1},
            ${item.src2} 2x,
            ${item.src3} 3x`"
            :alt="item.alt">
      </SplideSlide>
    </Splide>
    <img
      class="slider__small"
      :src="items[previousSlide].smallPhoto"
      @click="$event => $refs.splide.go(previousSlide)"
      alt="phone"
    >
    <div class="slider__pagination">
      <button
        :class="{
          'is-active': index === currentSlide,
          'is-old':  currentSlide > index,
        }"
        v-for="(item, index) in items"
        :key="index"
        @click="$event => $refs.splide.go(index)"
      ></button>
    </div>
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
          src1: require('../assets/images/carousel-photo-01.jpg'),
          src2: require('../assets/images/carousel-photo-01@2x.jpg'),
          src3: require('../assets/images/carousel-photo-01@3x.jpg'),
          smallPhoto: require('../assets/images/small-carousel-photo-01.jpg'),
          alt: 'Sample 1',
        },
        {
          src1: require('../assets/images/carousel-photo-02.jpg'),
          src2: require('../assets/images/carousel-photo-02@2x.jpg'),
          src3: require('../assets/images/carousel-photo-02@3x.jpg'),
          smallPhoto: require('../assets/images/small-carousel-photo-02.jpg'),
          alt: 'Sample 2',
        },
        {
          src1: require('../assets/images/carousel-photo-03.jpg'),
          src2: require('../assets/images/carousel-photo-03@2x.jpg'),
          src3: require('../assets/images/carousel-photo-03@3x.jpg'),
          smallPhoto: require('../assets/images/small-carousel-photo-03.jpg'),
          alt: 'Sample 3',
        },
        {
          src1: require('../assets/images/carousel-photo-04.jpg'),
          src2: require('../assets/images/carousel-photo-04@2x.jpg'),
          src3: require('../assets/images/carousel-photo-04@3x.jpg'),
          smallPhoto: require('../assets/images/small-carousel-photo-04.jpg'),
          alt: 'Sample 4',
        },
      ],
      options: {
        autoplay: true,
        interval: 8000,
        speed: 2000,
        pagination: false,
        arrows: false,
        type: 'fade',
        rewind: true,
        drag: true,
        dragMinThreshold: 200,
        flickPower: 50,
        dragPropagation: true
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
  height: 695px;
  margin-bottom: 120px;
  margin-top: -145px;
  position: relative;

  @media screen and (max-width: 768px) {
    margin: 25px auto 120px auto;
  }

  &__bg {
    position: absolute;
    transform: scale(0.99);
  }

  &__small {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 77px;
    left: 28px;
    transform: scale(1.05);
    cursor: pointer;
    border-radius: 3px;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__nextBtn {
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
    right: 0;
    bottom: 0;
    filter: blur(70px);
    opacity: 0.2;
    /* transform: scale(1); */
    height: 105%;
    width: 115%;
    animation: appear 1s ease-in-out;

    @keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.2;
      }
    }
  }

  &__pagination {
    position: absolute;
    bottom: -30px;
    display: grid;
    grid-template-columns: repeat(var(--n-items), 1fr);
    gap: 8px;
    padding: 0 45px;
    width: calc(100% - 92px);

    button {
      height: 1px;
      background: #3A3A3A;
      width: 100%;
      border: none;
      cursor: pointer;
      position: relative;

      &.is-active, &.is-old {
        &::before {
          content: "";
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 2px;
          background: #EEECEC;
          opacity: 1;
          top: 0;
          left: 0;
        }
      }
      &.is-active {
        &::before {
          animation: progress 8s linear;
        }
      }
      &.is-old {
        &::before {
          animation: none;
        }
      }
      @keyframes progress {
        from {transform: translateX(-50%) scaleX(0)}
        to {transform: translateX(0) scaleX(1)}
      }
    }
  }
}

.splide {
  height: 100%;

  &__track {
    width: 306px;
    margin-left: 15px;
    margin-top: 117px;
    position: absolute;
    background: black;

    img {
      cursor: pointer;
    }
  }
}
</style>
