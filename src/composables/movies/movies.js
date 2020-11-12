import { computed, reactive, toRefs } from '@vue/composition-api'
import { searchMovies } from '@/api/movies.api'

function MoviesList () {
  // CREATE A REACTIVE PROXY OF THE VARIABLES
  const state = reactive({
    movieResults: {},
    currentPage: 0,
    searchError: null,
    isFetching: false,
    searchText: '',
    favoriteMovies: [],
    totalFavoriteMovies: computed(() => state.favoriteMovies.length)
  })
  // SUBMIT THE FORM
  const submitForm = () => {
    searchMovieWithTitle(state.searchText, 1) // Start with the first page
    state.currentPage = 1
  }
  // FETCH FROM THE API THE LIST OF MOVIES WITH TITLE SEARCH WORD
  const searchMovieWithTitle = async (title, page) => {
    try {
      state.isFetching = true
      const response = await searchMovies(title, page)
      state.movieResults = response.data
      state.isFetching = false
    } catch (error) {
      console.error(error)
      if (error.response) {
        state.searchError = error.response.data
      } else {
        state.searchError = 'An API fetching error occured'
      }
    }
    const response = await searchMovies(title, page)
    state.movieResults = response.data
  }

  const loadPrevious = () => {
    if (state.currentPage > 1) {
      state.currentPage -= 1
      searchMovieWithTitle(state.searchText, state.currentPage)
    }
  }

  const loadNext = () => {
    state.currentPage += 1
    searchMovieWithTitle(state.searchText, state.currentPage)
  }

  // ADD A MOVIE TO THE FAVORITE LIST
  const starThis = movie => {
    // add to the favorite list
    state.favoriteMovies.push(movie)
  }

  // REMOVE A MOVIE FROM THE FAVORITE LIST
  const unstarThis = movie => {
    // remove movie form list
    const position = state.favoriteMovies
      .map(item => item.imdbID)
      .indexOf(movie.imdbID)
    state.favoriteMovies.splice(position, 1)
  }

  // CHECK IF A MOVIE IS IN THE LIST OF FAVORITE
  const isFavorite = movie => {
    const movieChecked = state.favoriteMovies.find(
      item => item.imdbID === movie.imdbID
    )
    return !movieChecked
  }

  return {
    state: toRefs(state),
    submitForm,
    searchMovieWithTitle,
    loadPrevious,
    loadNext,
    starThis,
    unstarThis,
    isFavorite
  }
}

export { MoviesList }
