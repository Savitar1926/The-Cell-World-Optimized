<template>
  <div class="container_all">
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
    <router-view class="scene" :class="{sidebar_move : toggle}"/>
  </div>
</template>


<script>
import Sidebar from './components/Sidebar.vue'
import gsap from 'gsap'

export default {
  data() {
    return{
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
  component: {
    Sidebar
  },
  methods: {
    toggle_SideBar(){
      this.toggle = !this.toggle;
      if (this.toggle == true){
        gsap.to('canvas', {x: '35%', duration: 0.5, ease: "expo.out"})
      } else{
        gsap.to('canvas', {x: '0%', duration: 0.5, ease: "expo.out"})
      }
      console.log(this.AnimalCells)
    },
    move_camera(){
      console.log('I am clicked')
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
}
</script>


<style>
  body{
    background: #000000;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #000000;
  }
  .container_all{ 
    overflow: hidden;
    margin: 0;
    background: #000000;
  }
    .test_button{
    z-index: 40;
    position: absolute;
    left: 0;
    }
    .test_button > div{
    padding: 30px;
    }
    .sidebar_parent {
      width: 35%;
      height: 100vh;
      position: absolute;
      z-index: 40;
      overflow-x: hidden;
      background-color: #000000;
      margin: 0px;
      top: 0;
      left: 0;
    }
        .sidebar_container {
        padding: 30px;
        display: flex;
        justify-content: space-around;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        }
        .sidebar_container > div {
        display: flex;
        justify-content: space-around;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        }
        .sidebar_container > div > div > p {
        display: flex;
        justify-content: space-around;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        text-align: left;
        color: #ffffff;
        }
      .sidebar_parent a {
        font-weight: bold;
        color: #42b983;
      }
      .sidebar_parent a.router-link-exact-active {
        color: #42b983;
      }
  canvas{
    position: fixed;
    z-index: 0;
    background: #000000;
    inset: 0;
  }
</style>
