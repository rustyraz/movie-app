<template>
  <div>
    <v-tabs right class="pt-1">
      <v-tab> Explore </v-tab>
      <v-tab>
        <v-badge
          color="orange"
          :content="totalFavoriteMovies ? totalFavoriteMovies : '0'"
          class="mr-2"
        >
          Favorites
        </v-badge>
      </v-tab>

      <v-tab-item>
        <form @submit.prevent="submitForm">
          <v-container fluid>
            <v-row class="pl-2">
              <v-col cols="12" md="8">
                <v-text-field
                  label="Movie Search Word"
                  v-model.trim="searchText"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn
                  :disabled="!searchText"
                  color="orange darken-3"
                  type="submit"
                  block
                  large
                >
                  Search
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </form>

        <v-container v-if="isFetching">
          <TheCircularProgressIcon />
        </v-container>

        <v-container fluid v-else grid-list-xl>
          <div v-if="movieResults.total">
            <h4 class="pl-2  grey--text text--lighten-1">
              Total results: {{ movieResults.total }} movies found
            </h4>
          <v-layout wrap v-if="movieResults.total">
            
            <v-row >
              <v-col
              v-for="(movie, index) in movieResults.data"
              :key="index"
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

          <v-layout>
            <!-- PAGINATION -->
            <v-row v-if="movieResults.total_pages" class="pa-3">
              <v-col cols="auto" class="mr-auto ml-2">
                <v-btn
                  :disabled="currentPage == 1"
                  color="orange darken-3"
                  @click="loadPrevious"
                  >Previous</v-btn
                >
              </v-col>
              <v-col class="text-center text-grey">
                {{ currentPage }} of {{ movieResults.total_pages }}
              </v-col>
              <v-col cols="auto" class="mr-2">
                <v-btn
                  :disabled="
                    !movieResults.total_pages ||
                    movieResults.total_pages === currentPage
                  "
                  color="orange darken-3"
                  @click="loadNext"
                  >Next</v-btn
                >
              </v-col>
            </v-row>
            <!-- END OF PAGINATION -->
          </v-layout>

          </div>

          <NoDataFound v-else />
        </v-container>
      </v-tab-item>

      <!-- FAVORITE MOVIES -->
      <v-tab-item>
        <FavoriteMoviesList
          :data="{ favoriteMovies, unstarThis, starThis, isFavorite, totalFavoriteMovies }"
          v-if="favoriteMovies"
        />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { MoviesList } from "@/composables/movies/movies";
import TheCircularProgressIcon from "@/components/Layout/TheCircularProgress";
import NoDataFound from "./NoDataFound";
import FavoriteMoviesList from "./FavoriteMovies";
import MovieCard from "./MovieCard";
export default {  
  components: {
    FavoriteMoviesList,
    TheCircularProgressIcon,
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
  /* @import "../assets/styles/style.css"; */
</style>