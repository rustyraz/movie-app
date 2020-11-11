<template>
  <v-app>
    <TheHeader />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "@/components/Layout/TheHeader";
export default {
  name: "App",
  components: {
    TheHeader,
  },
  data: () => ({
    //
  }),
};
</script>
