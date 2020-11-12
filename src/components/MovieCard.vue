<template>
  <v-card class="movie-card" v-if="data">
    <v-card-title>
      <h6 class="grey--text text--darken-2">
        {{ movie.Title }}
      </h6>
    </v-card-title>

    <v-card-text class="grey--text text--darken-1">
      <p>Year: {{ movie.Year }}</p>
      <p>ImdbID: {{ movie.imdbID }}</p>
      <div class="">
        <a
          @click="starThis(movie)"
          title="add to favorite"
          v-if="isFavorite(movie)"
          ><v-icon>mdi-star</v-icon></a
        >
        <a @click="unstarThis(movie)" title="remove from favorite" v-else
          ><v-icon color="orange">mdi-star</v-icon></a
        >
      </div>
    </v-card-text>
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
