<template>
<transition appear @before-enter="beforeEnter" @enter="enter">
<div class="HElloWorld">Hello</div>
</transition>

<button class="test_world" @click="move_camera">Hello</button>
  <Renderer
    ref="renderer"
    antialias
    :orbit-ctrl="{ enableDamping: true, enablePan: false, dampingFactor: 0.05, maxDistance: 20, minDistance: 10, minPan: 3  }"
    resize="window"
    :pointer="{ intersectRecursive: true }"
  >      <Raycaster intersect-recursive @click="onClick" />
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

      <GltfModel :position="{ x: 0, y: 1, z: 2 }" src="humanCell1.glb"   />
    </Scene>
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="0.8" :radius="1" />
    </EffectComposer>
  </Renderer>
</template>

<script>
import gsap from 'gsap'

import {
  EffectComposer,
  SpotLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
  UnrealBloomPass,
  RenderPass,
  Raycaster
} from "troisjs";
export default {
  components: {
    EffectComposer,
    SpotLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
    UnrealBloomPass,
    RenderPass,
    Raycaster
  },
  mounted(){
    console.log('Hello')
    console.log(this.$refs.camera.camera.position.x)

  },
  methods:{
    onClick(){
      console.log('hello World')
    },
    beforeEnter(el){
    el.style.opacity = 1;
    el.style.transform = 'translateY(0px)'
  },
  enter(el){
    gsap.to(el, {
      y: -700,
      duration: 1,
      delay: 2,
      ease: "expo.out"})
  },
  move_camera(){
    console.log(this.$refs.camera.camera.position.z)
    console.log(this.$refs.camera.camera.position.y)
    gsap.to(this.$refs.camera.camera.position, {x: 1.5, y: -0.3383049367400532, z: 12, duration: 0.5, ease: "expo.out"})
  },
  }
};
</script>
<style>
.hello{
  z-index: 98;
  position: fixed;
  background: #fff;
  height: 100vh;
  width: 40%;
}
.test_world{
  z-index: 99;
  position: fixed;
}
body,
html {
  margin: 0;
  overflow: hidden;
}
canvas {
  width: 100%;
  height: 100vh;
}
.hello {
  cursor: pointer;
}
.HElloWorld{
  height: 100vh;
  width: 100vw;
  background: #efde74;
  z-index: 100;
  position: fixed;
}
</style>
