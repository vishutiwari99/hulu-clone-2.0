const API_KEY = process.env.API_KEY

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchPopularMovies: {
        title: 'Cartoon',
        url: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    },
    fetchUpcomingMovies: {
        title: 'Horror',
        url: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    },
    fetchMysteryMovies: {
        title: 'Animation',
        url: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    },

}