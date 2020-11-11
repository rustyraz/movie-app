<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-layout wrap v-if="favoriteMovies.length">
        <h4 class="pl-5 grey--text text--lighten-1">
          Total results: {{ favoriteMovies.length }} movies found
        </h4>
        <div class="movie-list-box pl-3">
          <MovieCard
            v-for="movie in favoriteMovies"
            :key="movie.imdbID"
            :data="{ movie, unstarThis, starThis, isFavorite }"
          />
          <!--
            <v-card class="movie-card" v-for="(movie, index) in favoriteMovies" :key="index">                        
                <v-card-title>                                    
                    <h6 class="grey--text text--darken-2">                                    
                        {{movie.Title}}
                    </h6>
                </v-card-title>
                    
                <v-card-text class="grey--text text--darken-1">
                    <p>Year: {{movie.Year}}</p>
                    <p>ImdbID: {{movie.imdbID}}</p>
                    <div class="">
                        <a @click="unstarThis(movie)"><v-icon color="orange">mdi-star</v-icon></a>
                    </div>
                </v-card-text>
            </v-card>  -->
        </div>
      </v-layout>

      <NoDataFound v-else />
    </v-container>
  </div>
</template>

<script>
import NoDataFound from "./NoDataFound";
import MovieCard from "./MovieCard";
export default {
  components: {
    NoDataFound,
    MovieCard,
  },
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    return {
      favoriteMovies: props.data.favoriteMovies,
      unstarThis: props.data.unstarThis,
      starThis: props.data.starThis,
      isFavorite: props.data.isFavorite,
    };
  },
};
</script>
