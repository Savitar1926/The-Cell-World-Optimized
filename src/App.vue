<template>
  <div class="container_all">
    <div class="portrait" v-if="!this.orientation">
      Hello
    </div>
    <div class="landscape" v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <div class="back_trans">
      <lottie-interactive
        path="loader_trans.json"
        loop
        interaction="play-on-show"
        speed="1"
      />
      Loading to {{ $route.name }}
    </div>
  </div>
</template>

<script>
import { LottieInteractive } from "lottie-interactive";
export default {
  data() {
    return {
      loading: false,
      route: this.$route.name,
      orientation: true,
    };
  },
  components: {
    LottieInteractive,
  },
  watch: {
    $route(to, from) {
      this.toggle = false;
      console.log("Route changed from " + from.path + " to " + to.path);
      console.log(this.$route.name);
      // if (to.path == '/plantcell'){
      //   this.animalCellToggle = false
      //   this.toggle = false;
      // } else if (to.path == '/') {
      //   this.toggle = false;
      // } else {
      //   this.toggle = false;
      // }
    },
    checkRoute() {
      console.log(this.$route.name);
    },
  },
  beforeUpdate() {
    console.log("I am updating");
  },
  mounted() {
    window.addEventListener("orientationchange", this.handleOrientationChange);
  },
  methods: {
    handleOrientationChange() {
      const orientation = window.screen.orientation.type;
      if (orientation === "portrait-primary") {
        console.log("portarit");
        this.orientation = false;
      } else if (orientation === "landscape-primary") {
        console.log("landscape");
        this.orientation = true;
      }
    },
  },
};
</script>

<style>
.portrait {
  z-index: 1000;
  background-color: #ffffff;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back_trans {
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0;
  z-index: -1;
  color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
::selection {
  color: none;
  background: none;
}
/* For Mozilla Firefox */
::-moz-selection {
  color: none;
  background: none;
}
@font-face {
  font-family: "Poppins";
  src: url(./assets/Poppins-Regular.ttf);
}
@font-face {
  font-family: "Bebas";
  src: url(./assets/BebasNeue-Regular.ttf);
}
html {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
body {
  background: #000000;
  overflow: hidden;
}
button {
  font-family: Poppins;
}
#app {
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  background: #000000;
}
.container_all {
  overflow: hidden;
  margin: 0 auto;
  background: #000000;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active,
fade-leave-active {
  transition: all 0.3s ease;
}
canvas {
  position: fixed;
  z-index: 0;
  background: #000000;
  top: 0;
  right: 0;
}
</style>
