<template>
  <div class="container_all">
    <router-view class="scene"/>
  </div>
</template>


<script>
export default {
  data() {
    return{
      loading: false,
    }
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
    margin: 0 auto;
    background: #000000;
  }

  canvas{
    position: fixed;
    z-index: 0;
    background: #000000;
    inset: 0;
  }
</style>
