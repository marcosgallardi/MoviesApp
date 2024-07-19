import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularRatedResponse} from '../../../infrastructure/interfaces/popularRated.Response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const topRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const ratedMovie = await fetcher.get<PopularRatedResponse>('/top_rated');
    return ratedMovie.results.map(MovieMapper.fromMovieResultToEntity);
  } catch (error) {
    throw error;
  }
};
