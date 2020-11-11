<template>
  <div>
    <v-app-bar app color="grey darken-4" dark>
      <v-app-bar-nav-icon @click="toggle = !toggle"></v-app-bar-nav-icon>
      <v-toolbar-title>My Movie App</v-toolbar-title>
    </v-app-bar>
    <!--
    <v-navigation-drawer v-model="toggle" floating color="orange darken-4" dark app>
      
    </v-navigation-drawer>
    -->
  </div>
</template>

<script>
export default {
  data: () => ({
    toggle: false,
    links: [
      { path: "/", name: "Search", icon: "mdi-magnify" },
      { path: "/favorites", name: "Favorites", icon: "mdi-star" },
    ],
  }),
};
</script>

<style>
</style>