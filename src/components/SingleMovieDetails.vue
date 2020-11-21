<template>
  <div>
    <v-container fluid grid-list-xl>
      <div v-if="totalFavorite">
        <h4 class="pl-5 grey--text text--lighten-1">
          Total results: {{totalFavorite}} movies found
        </h4>
        <v-layout wrap>          
          <v-row >
              <v-col
                v-for="movie in favoriteMovies"
                :key="movie.imdbID"
                xs="12"
                sm="6"
                md="4"
                lg="3"
                xl="3"
              >
                <MovieCard
                  :data="{ movie, unstarThis, starThis, isFavorite }"
                />
              </v-col>
          </v-row>
        </v-layout>
      </div>
      

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