import { AxiosAdapter } from "./axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseURL:"https://api.themoviedb.org/3/movie",
    params:{
        api_key:"cf47db1c31f721004ea86a01839559b3",
        language:"es"
    }
})