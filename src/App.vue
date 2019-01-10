<template>
  <div id="app">
    <v-app id="inspire" dark>
      <MenuList />

      <router-view/>
      <!-- <TheFooter /> -->
    </v-app>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList";
import TheFooter from "@/components/Footer";

export default {
  name: "App",
  components: {
    MenuList,
    TheFooter
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
