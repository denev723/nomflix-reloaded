const API_KEY = "24e57914be24aef87dfd80b279f9bb90";
const BASE_PATH = "https://api.themoviedb.org";

interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export function getMovies() {
    return fetch(`${BASE_PATH}/3/movie/now_playing?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}
