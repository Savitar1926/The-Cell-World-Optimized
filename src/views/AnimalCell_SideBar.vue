<template>
  <div class="animallcell_parent">
  <div class="sidebar_component">
      <div class="test_button">
        <div>
          <button class="button" @click="toggle_SideBar">Hello World</button>
        </div>
      </div>
      <div class="sidebar_parent" v-if="toggle">
      <button @click="toggle_SideBar">Close</button>
        <div class="sidebar_container">
          <div v-if="animalCellToggle">
            <div v-for="content in AnimalCells" :key="content" >
              <p> {{ content.title }} </p>
              <p> {{ content.definition }} </p>
                <div v-for="specilizations in content.AnimalSpecializations" :key="specilizations" style="color: #ffffff;">
                <p> {{ specilizations.title }} </p>
                <p> {{ specilizations.definition }} </p>
                <p> {{ specilizations.junctionTitle }} </p>
                <p> {{ specilizations.junctionDefinition }} </p>
                <button class="button" @click="move_camera">Move Camera</button>
                </div>
            </div>
          </div>
        <div v-else>
          <div>
            <p>Hello World</p>
            <p>Hello World</p>
          </div>
        </div>
          <router-link to="/">Show</router-link> |
          <router-link to="/plantcell">Hide</router-link>
        </div>
      </div>
  </div>
    <transition appear name="slide-fade">
      <div class="white" v-if="loaded">
        <lottie-interactive path="cell_load.json" interaction="play-on-show" loop />
      </div>
    </transition>
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
      loaded: true,
      toggle: false,
      animalCellToggle: true,
      AnimalCells: [
        { 
          title: 'Animal Cell',
          definition: 'Animal cells are eukaryotic cells that has a true, membrane-bound nucleus along with other cellular organelles, but has no cell wall.'
        },
        {
          title: 'Cell membrane',
          definition: 'The cell membrane is a semi-permeable thin layer of protein and fat that regulates the entry and exit of specific substances within the cell.',
            AnimalSpecializations: [
              {
                title: 'Specializations of cell membrane of animal cells:'
              },
                {
                  title: 'Microvilli',
                  definition: 'Microvilli are tiny finger-like projections the greatly increases the cells’ surface area for absorption'
                },
                {
                  title: 'Cell Junctions',
                  definition: 'Cell junctions are intercellular connections between the plasma membrane of adjacent cells of animal tissues',
                },
                    {
                      junctionTitle: 'Gap Junctions',
                      junctionDefinition: 'Gap junctions are cylinder-like channels between neighboring cells that allows transport of ions, water, and other substances.'
                    },
                    {
                      junctionTitle: 'Tight Junctions',
                      junctionDefinition: 'Tight junctions are zipper-like structure that creates a watertight seal between two adjacent animal cells to keep liquid from escaping between cells.'
                    },
                    {
                      junctionTitle: 'Desmosomes',
                      junctionDefinition: 'Desmosomes are button-like junctions that pins adjacent cells together to ensure that cells in organs and tissues that stretch, remain connected in an unbroken sheet.'
                    }
            ]
        },
        {
          
        }
    ],
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
  },
  toggle_SideBar(){
      this.toggle = !this.toggle;
      if (this.toggle == true){
        gsap.to('canvas', {x: '35%', duration: 0.5, ease: "expo.out"})
      } else{
        gsap.to('canvas', {x: '0%', duration: 0.5, ease: "expo.out"})
      }
      console.log(this.AnimalCells)
    },
  },
  watch:{
      $route (to, from){
          this.toggle = false;
          console.log('Route changed from ' + from.path + ' to ' + to.path);
          if (to.path == '/plantcell'){
            this.animalCellToggle = false
          } else if (to.path == '/') [
            this.animalCellToggle = true
          ]
      },
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
