import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesUpComingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const movieUpComing = await fetcher.get<NowPlayingResponse>('/upcoming');
    return movieUpComing.results.map(MovieMapper.fromMovieResultToEntity);
  } catch (error) {
    throw error;
  }
};
