<template>
  <div class="animallcell_parent">
    <transition appear name="slide-fade">
      <div class="white" v-if="loaded">
        <lottie-interactive path="cell_load.json" interaction="play-on-show" loop />
      </div>
    </transition>
    <button class="test_world" @click="move_camera">Hello</button>
      <Renderer
        ref="renderer"
        antialias
        :orbit-ctrl="{ enableDamping: true, enablePan: false, dampingFactor: 0.05, maxDistance: 15, minDistance: 10, minPan: 3  }"
        resize="window"
        :pointer="{ intersectRecursive: true }">      
        <Camera   ref="camera"  :position="{ x: 10, y: 1, z: 2 }"/>
        <Scene>
          <SpotLight
            color="#ffffff"
            :position="{ y: 250, z: 0 }"
            :cast-shadow="true"
            :shadow-map-size="{ width: 1024, height: 1024 }"
          />
          <SpotLight
            color="#ffffff"
            :position="{ y: -150, z: 0 }"
            :cast-shadow="true"
            :shadow-map-size="{ width: 1024, height: 1024 }"
          />
          <GltfModel :position="{ x: 0, y: 1, z: 2 }" src="humanCell.glb"   @progress="onProgress"  @load="onReady" />
        </Scene>
        <EffectComposer>
          <RenderPass />
          <UnrealBloomPass :strength="0.8" :radius="1" />
        </EffectComposer>
      </Renderer>
  </div>
</template>

<script>
import gsap from 'gsap'
import { LottieInteractive } from 'lottie-interactive'

import {
  EffectComposer,
  SpotLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
  UnrealBloomPass,
  RenderPass,
} from "troisjs";
export default {
  data(){
    return {
      loaded: true
    }
  },
  components: {
    LottieInteractive,
    EffectComposer,
    SpotLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
    UnrealBloomPass,
    RenderPass,
  },
  mounted(){
    console.log('Hello')
    console.log(this.$refs.camera.camera.position.x)

  },
  methods:{
  move_camera(){
    console.log(this.$refs.camera.camera.position.z)
    console.log(this.$refs.camera.camera.position.y)
    gsap.to(this.$refs.camera.camera.position, {x: 1.5, y: -0.3383049367400532, z: 12, duration: 0.5, ease: "expo.out"})
  },
  onProgress(){
    console.log("Loading Animal Cell")
  },
  onReady(){
    const hello = this.loaded = !this.loaded
    console.log(hello)
  }
  }
};
</script>
<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(0,1.16,.99,.98);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transition: all .8s cubic-bezier(0,1.16,.99,.98);
  transform: translateY(-700px);
}
.test_world{
  z-index: 99;
  position: fixed;
}
.animallcell_parent {
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: #000000;
}
canvas {
  width: 100%;
  height: 100vh;
}
.white{
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  z-index: 100;
  position: fixed;
}
</style>
