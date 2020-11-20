<template>
  <div>
    <v-app-bar app color="" class="grey--text">
      <v-app-bar-nav-icon @click="toggle = !toggle"></v-app-bar-nav-icon>
      <v-toolbar-title>My Movie App</v-toolbar-title>
    </v-app-bar>
    <!---->
    <v-navigation-drawer v-model="toggle" floating color="grey lighten-5"   app expand-on-hover>
      <v-list-item>
        <v-list-item-content class="text-center">
         
          <v-list-item-title class="title ">
            <v-avatar color="orange darken-2" size="35">
              <span class="white--text">M</span>
            </v-avatar>
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
        class="orange--text"
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
    toggle: true,
    links: [
      { path: "/", title: "Explore", icon: "mdi-magnify" },
      { path: "/favorites", title: "Favorites", icon: "mdi-star" },
    ],
  }),
};
</script>

<style>
</style>