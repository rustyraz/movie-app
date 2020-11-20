<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-layout wrap v-if="totalFavorite">
        <h4 class="pl-5 grey--text text--lighten-1">
          Total results: {{totalFavorite}} movies found
        </h4>
        <div class="movie-list-box pl-3">
          <MovieCard
            v-for="movie in favoriteMovies"
            :key="movie.imdbID"
            :data="{ movie, unstarThis, starThis, isFavorite }"
          />
        </div>
      </v-layout>

      <NoDataFound v-else />
    </v-container>
  </div>
</template>

<script>
import { MoviesList } from "@/composables/movies/movies";
// import { computed } from '@vue/composition-api'
import NoDataFound from "./NoDataFound";
import MovieCard from "./MovieCard";
export default {  
  components: {
    NoDataFound,
    MovieCard,
  },
  setup() {
    const {
      state,
      submitForm,
      searchMovieWithTitle,
      loadPrevious,
      loadNext,
      starThis,
      unstarThis,
      isFavorite,
    } = MoviesList();

    return {
      ...state, // We spread the state properties here
      totalFavorite: state.totalFavoriteMovies, // We invoke the the reactivity back
      submitForm,
      searchMovieWithTitle,
      loadPrevious,
      loadNext,
      starThis,
      unstarThis,
      isFavorite,
    };
  },
};
</script>

<style>
  @import "../assets/styles/style.css";
</style>