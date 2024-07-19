import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularRatedResponse} from '../../../infrastructure/interfaces/popularRated.Response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const popularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popularMovie = await fetcher.get<PopularRatedResponse>('/popular');

    return popularMovie.results.map(MovieMapper.fromMovieResultToEntity);
  } catch (error) {
    throw error;
  }
};
