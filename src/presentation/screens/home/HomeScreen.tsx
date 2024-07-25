import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, top_rated, upComing,popularNextPage} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principales */}
        <PosterCarousel movies={nowPlaying} />

        {/* Populares  */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />
        {/* Populares  */}
        <HorizontalCarousel movies={top_rated} title="Mejor Calificadas" />
        {/* Populares  */}
        <HorizontalCarousel movies={upComing} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
