<template>
  <div class="animallcell_parent">
    <div class="sidebar_component">
        <div>
          <button class="nav_button" >
            <lottie-interactive style="cursor: pointer;" path="hamburger_menu.json" @click="toggle_SideBar" interaction="switch" speed="4" />
          </button>
        </div>
      <div class="sidebar_parent" v-if="toggle">
        <div class="sidebar_container">
          <div class="animalcell_content">
    // Animal Cell
            <div class="animal_top">
              <div class="title-container">
                  <p class="title" style="color: '#ffffff;">Animal Cell</p>
              </div>
                <div class="definition">
                  <p>Eukaryotic cells that has a true, membrane-bound nucleus along with other cellular organelles, but has no cell wall.</p>
                    <button class="plant_button">
                      <router-link to="/plantcell">Explore Plant Cell</router-link>
                    </button>
                </div>
            </div>
            <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">
            
    // Cell Membrane
            <div class="animal_slots">
              <div class="title-container" @click="this.cell_membrane_tab = !this.cell_membrane_tab">
                  <p class="title" style="color: '#ffffff;">
                    Cell membrane
                  </p>
                  <Dropdown_down v-if="this.cell_membrane_tab" style="width: 25px;" />
                  <Dropdown_up v-else style="width: 25px;" />
              </div>
                <div class="definition" v-show="this.cell_membrane_tab">
                  <p>
                    A semi-permeable thin layer of protein and fat that
regulates the entry and exit of specific substances within the cell.
                  </p>
                  <p class="title" style="font-size: 16px;">Specializations of cell membrane of animal cells:</p>
                  <p class="title" style="font-size: 16px; margin-bottom:-5px">1. Microvilli</p>
                  <p class="definition" style="font-size: 14px; margin-left: 15px;">Tiny finger-like projections the greatly increases the cells’
surface area for absorption</p>
                  <p class="title" style="font-size: 16px; margin-bottom:-5px">2. Cell Junctions</p>
                  <p class="definition" style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; ">Cell junctions are intercellular connections between the plasma
membrane of adjacent cells of animal tissues</p>
                  <div style="margin-left: 20px;">
                    <p class="title" style="font-size: 16px; margin-bottom:-5px; margin-left: 15px">Gap junctions</p>
                    <p class="definition" style="font-size: 14px; margin-bottom: -20px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; ">Gap junctions are cylinder-like channels between neighboring cells
that allows transport of ions, water, and other substances.</p>
                    <p class="title" style="font-size: 16px; margin-bottom:-5px; margin-left: 15px">Tight junctions</p>
                    <p class="definition" style="font-size: 14px; margin-bottom: -20px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; ">Tight junctions are zipper-like structure that creates a watertight
seal between two adjacent animal cells to keep liquid from escaping between cells.</p>
                    <p class="title" style="font-size: 16px; margin-bottom:-5px; margin-left: 15px">Desmosomes</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; ">Desmosomes are button-like junctions that pins adjacent cells
together to ensure that cells in organs and tissues that stretch, remain connected in an unbroken sheet.</p>
                  </div>
                  <button class="slot_button" @click="move_camera">Move Camera</button>
                </div>
            </div>
            <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">
    // Nucleus
            <div class="animal_slots">
              <div class="title-container" @click="this.nucleus_tab = !this.nucleus_tab">
                  <p class="title" style="color: '#ffffff;">
                    Nucleus
                  </p>
                  <Dropdown_down v-if="this.nucleus_tab" style="width: 25px;" />
                  <Dropdown_up v-else style="width: 25px;" />
              </div>
                <div class="definition" v-show="this.nucleus_tab">
                  <p>
                    The nucleus is a spherical membrane-bound structure that is present only in eukaryotic cells. The vital function of a nucleus is to store DNA or hereditary information required for cell division, metabolism, and growth.
                  </p>
                  <p class="title" style="font-size: 16px;">Sub-parts of the Nucleus:</p>
                  <p class="title" style="font-size: 16px; margin-bottom:-5px">1. Nuclear membrane</p>
                  <p class="definition" style="font-size: 14px; margin-left: 15px;">Nuclear membrane is a double-layered membrane that separates the
contents of the nucleus from the rest of the cell.</p>
                  <p class="title" style="font-size: 16px; margin-bottom:-5px">2. Nucleoplasm</p>
                  <p class="definition" style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; ">Nucleoplasm, also called karyoplasm, is a type of protoplasm found
within the nuclear membrane that is composed of thick fluid and constitutes chromatin fibers made up of DNA.</p>
                  <p class="title" style="font-size: 16px; margin-bottom:-5px">3. Nucleolus</p>
                  <p class="definition" style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; ">Nucleolus manufactures cell’s protein-producing structures and is a site
for ribosome assembly.</p>
                  <p class="title" style="font-size: 16px; margin-bottom:-5px">4. Chromatin network</p>
                  <p class="definition" style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; ">Chromatin is the network of the cell’s nucleus which contains all the
DNA of the nucleus of the cell</p>
                  <p class="title" style="font-size: 16px; margin-bottom:-5px">5. Nucleopore</p>
                  <p class="definition" style="font-size: 14px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; ">Nuclear membrane is perforated with hole called nucleopore that
allows proteins and nucleic acids to pass through.</p>
                  <button class="slot_button" @click="move_camera">Move Camera</button>
                </div>
            </div>
            <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">

    // Cytoplasm
            <div class="animal_slots">
                <div class="title-container" @click="this.cytoplasm_tab = !this.cytoplasm_tab">
                    <p class="title" style="color: '#ffffff;">
                      Cytoplasm
                    </p>
                    <Dropdown_down v-if="this.cytoplasm_tab" style="width: 25px;" />
                    <Dropdown_up v-else style="width: 25px;" />
                </div>
                  <div class="definition" v-show="this.cytoplasm_tab">
                    <p>
                      The cytoplasm is a jelly-like fluid enclosed within the cell membrane that comprises water, enzymes, and salts. All the other cell organelles are suspended within it.
                    </p>
                    <p class="title" style="font-size: 16px;">Elements of the Cytoplasm:</p>
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">1. Cytosol</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;">Cytosol is a semi-transparent liquid in which organelles, proteins, and
  other cell structures float.</p>
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">2. Organelles</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; ">Organelles are little metabolic machinery that carry out the functions
  essential to the survival of the cell.</p>                  
                    <button class="slot_button" @click="move_camera">Move Camera</button>
                  </div>
              </div>
            <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">

      // Subcellular Parts
            <p class="title" style="color: '#ffffff;">SUBCELLULAR PARTS:</p>
            <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">

      // Mitochondria
              <div class="animal_slots">
                <div class="title-container" @click="this.mitochondria_tab = !this.mitochondria_tab">
                    <p class="title" style="color: '#ffffff;">
                      Mitochondria
                    </p>
                    <Dropdown_down v-if="this.mitochondria_tab" style="width: 25px;" />
                    <Dropdown_up v-else style="width: 25px;" />
                </div>
                  <div class="definition" v-show="this.mitochondria_tab">
                    <p>
                      Mitochondria are spherical sausage-shaped bodies, often referred to as the “powerhouse of the cell”, as they release energy required to power all cellular functions. These organelles are the site for respiration.
                    </p>
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">1. Cristae</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;">Cristae is the inner membrane of the mitochondria that resembles a plate-like structure.</p>             
                    <button class="slot_button" @click="move_camera">Move Camera</button>
                  </div>
              </div>
              <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">
      // Ribosomes
            <div class="animal_slots">
                <div class="title-container" @click="this.ribosome_tab = !this.ribosome_tab">
                    <p class="title" style="color: '#ffffff;">
                      Ribosomes
                    </p>
                    <Dropdown_down v-if="this.ribosome_tab" style="width: 25px;" />
                    <Dropdown_up v-else style="width: 25px;" />
                </div>
                  <div class="definition" v-show="this.ribosome_tab">
                    <p>
                      Ribosomes are microscopic ribonucleoprotein particle that are the site for protein synthesis in cells.
                    </p>     
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">1. Rough endoplasmic reticulum (Rough ER)</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;">Rough ER, also called as Granular ER, is studded with ribosomes and a site for protein synthesis.</p>        
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">2. Smooth endoplasmic reticulum (Smooth ER)</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;">Smooth ER, also called as Agranular ER, does not have any ribosomes attached to its surface. It is the site for lipid synthesis.</p>        
                    <button class="slot_button" @click="move_camera">Move Camera</button>
                  </div>
              </div>
          <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px;  margin-bottom: -2px">
      // Endoplasmic reticulum
              <div class="animal_slots">
                <div class="title-container" @click="this.er_tab = !this.er_tab">
                    <p class="title" style="color: '#ffffff;">
                      Endoplasmic Reticulum
                    </p>
                    <Dropdown_down v-if="this.er_tab" style="width: 25px;" />
                    <Dropdown_up v-else style="width: 25px;" />
                </div>
                  <div class="definition" v-show="this.er_tab">
                    <p>
                      Endoplasmic reticulum is a network of tubules and flattened sacs that plays a major role in the production, processing, and transport of proteins and lipids.
                    </p>           
                    <button class="slot_button" @click="move_camera">Move Camera</button>
                  </div>
              </div>
          <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">

      // Golgi Apparatus
              <div class="animal_slots">
                <div class="title-container" @click="this.golgi_tab = !this.golgi_tab">
                    <p class="title" style="color: '#ffffff;">
                      Golgi Apparatus
                    </p>
                    <Dropdown_down v-if="this.golgi_tab" style="width: 25px;" />
                    <Dropdown_up v-else style="width: 25px;" />
                </div>
                  <div class="definition" v-show="this.golgi_tab">
                    <p>
                      Golgi apparatus, also called as golgi bodies or dictyosomes, is a stock of plate-like membrane containing sacs. Its main function is the packaging and secretion of the newly synthesized proteins from the Rough ER.
                    </p>           
                    <button class="slot_button" @click="move_camera">Move Camera</button>
                  </div>
              </div>
          <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">

      // Microtubules
       <div class="animal_slots">
                <div class="title-container" @click="this.microtubules_tab = !this.microtubules_tab">
                    <p class="title" style="color: '#ffffff;">
                      Microtubules
                    </p>
                    <Dropdown_down v-if="this.microtubules_tab" style="width: 25px;" />
                    <Dropdown_up v-else style="width: 25px;" />
                </div>
                  <div class="definition" v-show="this.microtubules_tab">
                    <p>
                      Microtubules are long straight hollow cylinders made of proteins alpha and beta tubulin. They are responsible in cell movements, cell division, and transporting materials within cells.
                    </p>
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">Cilia</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;">Cilia are slender, microscopic, hair-like structures or organelles.</p>   
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">Flagella</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;">Flagella are microscopic hair-like structures that have a whip-like appearance.</p>   
                    <button class="slot_button" @click="move_camera">Move Camera</button>
                  </div>
              </div>
          <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">

      // Microbodies
       <div class="animal_slots">
          <div class="title-container" @click="this.microbodies_tab = !this.microbodies_tab">
                    <p class="title" style="color: '#ffffff;">
                      Microbodies
                    </p>
                    <Dropdown_down v-if="this.microbodies_tab" style="width: 25px;" />
                    <Dropdown_up v-else style="width: 25px;" />
                </div>
                  <div class="definition" v-show="this.microbodies_tab">
                    <p>
                      Microbodies are spherical, membrane-bound organelles that contains oxidative enzymes. They are same in size with mitochondria.
                    </p>
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">Peroxisomes</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;">Peroxisomes are spherical membrane sacs that degrades fatty acids. It also uses molecular oxygen to detoxify a number of harmful substances including alcohol and formaldehyde.</p>   
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">Lysosomes</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;">Lysosomes are spherical organelles that act as a scavenger of the cell as it digests old cell parts and invading pathogens. Lysosomes are also involved in programmed cell death, also known as apoptosis.</p>   
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">Glyoxysomes</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;">Glyoxysomes are specialized peroxisome found in plants, particularly in germinating seeds, and filamentous fungi.</p>   
                    <p class="title" style="font-size: 16px; margin-bottom:-5px">Spherosomes</p>
                    <p class="definition" style="font-size: 14px; margin-left: 15px;">Spherosomes are small spherical bodies that are responsible for storage and synthesis of lipid</p>   
                    <button class="slot_button" @click="move_camera">Move Camera</button>
                  </div>
              </div>
          <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">
      
      // Microfilaments
            <div class="animal_slots">
                <div class="title-container" @click="this.microfilaments_tab = !this.microfilaments_tab">
                    <p class="title" style="color: '#ffffff;">
                      Microfilaments
                    </p>
                    <Dropdown_down v-if="this.microfilaments_tab" style="width: 25px;" />
                    <Dropdown_up v-else style="width: 25px;" />
                </div>
                  <div class="definition" v-show="this.microfilaments_tab">
                    <p>
                      Microfilaments are elaborate network of protein structure that extends throughout the cytoplasm. It acts as the cell’s bones and muscles that provides support and shape. It is also responsible for movement of organelles.
                    </p>           
                    <button class="slot_button" @click="move_camera">Move Camera</button>
                  </div>
              </div>
          <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">

      // Vacuole
       <div class="animal_slots">
                <div class="title-container" @click="this.vacuole_tab = !this.vacuole_tab">
                    <p class="title" style="color: '#ffffff;">
                      Vacuole
                    </p>
                    <Dropdown_down v-if="this.vacuole_tab" style="width: 25px;" />
                    <Dropdown_up v-else style="width: 25px;" />
                </div>
                  <div class="definition" v-show="this.vacuole_tab">
                    <p>
                      Vacuole is a cytoplasmic sap-filled bubble for cell enlargement and storage center. The vacuoles in animal cells are small and distributed throughout the cytoplasm while the vacuoles in plant cells are very large and take up most of the interior space of the cell.
                    </p>           
                    <button class="slot_button" @click="move_camera">Move Camera</button>
                  </div>
              </div>
          <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">

        // Tonoplast
        <div class="animal_slots">
                <div class="title-container" @click="this.tonoplast_tab = !this.tonoplast_tab">
                    <p class="title" style="color: '#ffffff;">
                      Tonoplast
                    </p>
                    <Dropdown_down v-if="this.tonoplast_tab" style="width: 25px;" />
                    <Dropdown_up v-else style="width: 25px;" />
                </div>
                  <div class="definition" v-show="this.tonoplast_tab">
                    <p>
                     Tonoplast is the membrane surrounding the vacuole.
                    </p>           
                    <button class="slot_button" @click="move_camera">Move Camera</button>
                  </div>
              </div>
          <hr style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px">
          </div>
        </div>
      </div>
    </div>
      <Renderer
        ref="renderer"
        antialias
        :orbit-ctrl="{ enableDamping: true, enablePan: false, dampingFactor: 0.05, maxDistance: 15, minDistance: 5, minPan: 3  }"
        resize="window"
        :pointer="{ intersectRecursive: true }">      
        <Camera   ref="camera"  :position="{ x: 10, y: 1, z: 2 }"/>
        <Scene>
          <SpotLight
            color="#ffffff"
            :position="{ y: 250, z: 0 }"
            :cast-shadow="true"
            :shadow-map-size="{ width: 1024, height: 1024 }"
            :intensity="0.5"
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
          <UnrealBloomPass :strength="0.5" :radius="1" />
        </EffectComposer>
      </Renderer>
  </div>
</template>

<script>
import gsap from 'gsap'
import { LottieInteractive } from 'lottie-interactive'
import Dropdown_down from '../components/Dropdown_down.vue'
import Dropdown_up from '../components/Dropdown_up.vue'

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
      animal_cell_tab: false,
      cell_membrane_tab: false,
      nucleus_tab: false,
      cytoplasm_tab: false,
      mitochondria_tab: false,
      ribosome_tab: false,
      er_tab: false,
      golgi_tab: false,
      microtubules_tab: false,
      microbodies_tab: false,
      microfilaments_tab: false,
      vacuole_tab: false,
      tonoplast_tab: false,
    }
  },
  components: {
    Dropdown_down,
    Dropdown_up,
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
    console.log(this.$refs.camera.camera.minDistance)
    gsap.to(this.$refs.camera.camera.position, {x: 1.5, y: -0.3383049367400532, z: 12, duration: 2, ease: "expo.out"})
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
        gsap.to('.nav_button', {left: '38%', duration: 0.5, ease: "expo.out"})
      } else{
        gsap.to('canvas', {x: '0%', duration: 0.5, ease: "expo.out"})
        gsap.to('.nav_button', {left: '3%', duration: 0.5, ease: "expo.out"})
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
          } else if (to.path == '/') {
            this.animalCellToggle = true
          }
      },
  }
};
</script>
<style>
.animallcell_parent {
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: #000000;
}
    .nav_button{
    z-index: 50;
    position: absolute;
    top: 5%;
    left: 3%;
    border: none;
    border-radius: 15px;
    width: 50px;
    height: 50px;
    padding: 10px;
    }
    .sidebar_parent {
      width: 35%;
      height: 100vh;
      position: absolute;
      z-index: 40;
      overflow-x: hidden;
      background-color: #000000;
      top: 0;
      right: 0;
    }
        .sidebar_container {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        }
          .animalcell_content {
            width: 100%;
            padding: 0px;
          }
          .animal_slots{
            width: 100%;
            cursor: pointer
          }
          .title-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin: -15px 0 -15px 0;
          }
          .title{
            color: #ffffff;
            font-weight: bold;
            font-size: 20px;
          }
          .definition {
            color: #ffffff;
            font-size: 14px;
            padding-bottom: 20px;
          }
          .slot_button{
            padding: 8px;
            border: none;
            border-radius: 10px;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
          }
          .plant_button{
            padding: 8px;
            border: none;
            border-radius: 10px;
            font-size: 12px;
            font-weight: bold;
            background: #1DB954;
            cursor: pointer;
            color: #ffffff;
          }



      canvas{
          position: fixed;
          z-index: 0;
          background: #000000;
          inset: 0;
        }
      .sidebar_parent a {
        font-weight: bold;
        color: #ffffff;
        text-decoration: none;
      }
      .sidebar_parent a.router-link-exact-active {
        color: #ffffff;
      }
      ::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(36, 36, 36); 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(22, 22, 22); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 15, 15); 
}
.white{
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  z-index: 100;
  position: fixed;
}
</style>
