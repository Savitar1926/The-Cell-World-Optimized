<template>
  <div class="container_all">
  <transition name="fade" mode="out-in">
    <router-view class="scene"/>
  </transition>
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
@font-face{
  font-family: 'Poppins';
  src: url(./assets/Poppins-Regular.ttf)
}
  html{
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  }
  body{
    background: #000000;
  }
  button {
    font-family: Poppins;
  }
  #app {
    font-family: Poppins;
    -webkit-font-smoothing: antialiased;
    background: #000000;
  }
  .container_all{ 
    overflow: hidden;
    margin: 0 auto;
    background: #000000;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
    transform: translateX(2em);
  }
  .fade-enter-active, fade-leave-active{
    transition: all .3s ease;
  }
  canvas{
    position: fixed;
    z-index: 0;
    background: #000000;
    inset: 0;
  }
</style>
