<template>
  <div>
    <v-app-bar app color="orange" dark>
      <v-app-bar-nav-icon @click="toggle = !toggle"></v-app-bar-nav-icon>
      <v-toolbar-title>My Movie App</v-toolbar-title>
    </v-app-bar>
    <!---->
    <v-navigation-drawer v-model="toggle" floating color="orange darken-1" dark app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Movies App
          </v-list-item-title>
          <v-list-item-subtitle>
            Find and Organize
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    toggle: false,
    links: [
      { path: "/", title: "Search", icon: "mdi-magnify" },
      { path: "/favorites", title: "Favorites", icon: "mdi-star" },
    ],
  }),
};
</script>

<style>
</style>