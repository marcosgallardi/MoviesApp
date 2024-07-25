import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularRatedResponse} from '../../../infrastructure/interfaces/popularRated.Response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

interface Options {
  limit?: number;
  page?: number;
}

export const popularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popularMovie = await fetcher.get<PopularRatedResponse>('/popular',{
      params:{
        page: options?.page ?? 1
      }
    });

    return popularMovie.results.map(MovieMapper.fromMovieResultToEntity);
  } catch (error) {
    throw error;
  }
};
