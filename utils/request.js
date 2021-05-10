const API_KEY = process.env.API_KEY

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movies?api_key=${API_KEY}&language=en-US`
    },
    fetchComedyMovies: {
        title: 'Cartoon',
        url: `/discover/movies?api_key=${API_KEY}&language=en-US`
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movies?api_key=${API_KEY}&language=en-US`
    },
    fetchMysteryMovies: {
        title: 'Mystery',
        url: `/discover/movies?api_key=${API_KEY}&language=en-US`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movies?api_key=${API_KEY}&language=en-US`
    },
}