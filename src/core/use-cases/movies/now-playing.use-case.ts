import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const movies = await fetcher.get<NowPlayingResponse>('/now_playing');

    return movies.results.map(MovieMapper.fromMovieResultToEntity);
  } catch (error) {
    throw error;
  }
};
