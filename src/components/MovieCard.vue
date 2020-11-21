<template>
  <v-card 
    class="ma-5" hover v-if="data"
  >
    <v-img
    src="https://picsum.photos/200"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="120px"
    >
      <v-card-title v-text="movie.Title"></v-card-title>
    </v-img>
    <!-- <v-card-title>
      <h6 class="grey--text text--darken-2">
        {{ movie.Title }}
      </h6>
    </v-card-title>  -->

    <v-card-text class="grey--text text--darken-1">
      <div>Year: {{ movie.Year }}</div>
      <div>ImdbID: {{ movie.imdbID }}</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon
        @click="starThis(movie)"
        title="add to favorite"
        v-if="isFavorite(movie)"
      >
        <v-icon>mdi-star</v-icon>
      </v-btn>

      <v-btn icon
        @click="unstarThis(movie)" 
        title="remove from favorite" 
        v-else
        color="orange"
      >
        <v-icon>mdi-star</v-icon>
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
  },
  setup(props) {
    return {
      movie: props.data.movie,
      unstarThis: props.data.unstarThis,
      starThis: props.data.starThis,
      isFavorite: props.data.isFavorite,
    };
  },
};
</script>
