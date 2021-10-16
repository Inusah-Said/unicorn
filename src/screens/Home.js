import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, FlatList, RefreshControl} from 'react-native';
import PalettePreview from '../components/PalettePreview';
const Home = ({navigation}) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const URL = 'https://color-palette-api.kadikraman.vercel.app/palettes';
  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const palettes = await response.json();
      setPalettes(palettes);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    setIsRefreshing(false);
  });
  useEffect(() => {
    handleFetchPalettes();
  }, []);
  setTimeout(() => {
    setIsRefreshing(false);
  }, 1000);
  return (
    <FlatList
      style={styles.list}
      // data={COLOR_PALETTES}
      data={palettes}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      keyExtractor={item => item.paletteName}
      renderItem={({item}) => (
        <PalettePreview
          handlePress={() => navigation.navigate('ColorPalette', item)}
          palette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});
export default Home;
