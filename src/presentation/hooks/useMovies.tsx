import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/http/MovieDB.adapter';

let popularPage = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);
  const [top_rated, setTop_rated] = useState<Movie[]>([]);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initLoad();
  }, []);

  const initLoad = async () => {
    try {
      const [nowPlayingMovies, upComingMovies, topRatedMovies, popularMovies] =
        await Promise.all([
          UseCases.moviesNowPlayingUseCase(movieDBFetcher),
          UseCases.moviesUpComingUseCase(movieDBFetcher),
          UseCases.topRatedUseCase(movieDBFetcher),
          UseCases.popularUseCase(movieDBFetcher),
        ]);

      setNowPlaying(nowPlayingMovies);
      setPopular(popularMovies);
      setUpComing(upComingMovies);
      setTop_rated(topRatedMovies);
      setIsLoading(false);
    } catch (error) {
      console.error('Error al cargar las películas:', error);
    }
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    upComing,
    top_rated,

    //metodos
    popularNextPage: async () => {
      popularPage++;
      const popularMovies = await UseCases.popularUseCase(movieDBFetcher,{
        page: popularPage,
      });
      setPopular(prev => [...prev, ...popularMovies])
    },
  };
};
