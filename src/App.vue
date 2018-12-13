<template>
  <div id="app">
    <v-app id="inspire" dark>
      <menulist />
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList";
export default {
  name: "App",
  components: {
    menulist: MenuList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
