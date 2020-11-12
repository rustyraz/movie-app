import httpClient from './httpClient'

// movies/search/?Title=title&page=page
const ENDPOINT = '/movies/search/'

const searchMovies = (title, page) => httpClient.get(ENDPOINT + `?Title=${title}&page=${page}`)

export {
  searchMovies
}
