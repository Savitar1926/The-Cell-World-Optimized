<template>
<div class="container_all">
<Sidebar class="sidebar" />
  <div id="nav">
    <div class="nav_padding">
    <router-link to="/">Show</router-link> |
    <router-link to="/about">Hide</router-link>
    </div>
  </div>
  <router-view class="hello-world"/>
</div>
</template>


<script>
import Sidebar from './components/Sidebar.vue'
export default {
component: {
  Sidebar
}
}
</script>


<style>
body{ 
  overflow: hidden;
  margin: 0;
}

:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;

}
.sidebar{
  position: fixed;
  z-index: 101;
}
.HElloWorld{
  height: 100vh;
  width: 100vw;
  background: #efde74;
  z-index: 100;
  inset: 0;
  position: fixed;
}
.container{
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav_padding {
  padding: 30px;
  display: flex;
  justify-content: space-around;
}
#nav {
  width: 100%;
  position: absolute;
  z-index: 40;
  overflow-x: hidden;
  color: #0000;
  margin: 0px;
}

#nav a {
  font-weight: bold;
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
canvas{
  position: fixed;
  inset: 0;
}
</style>
