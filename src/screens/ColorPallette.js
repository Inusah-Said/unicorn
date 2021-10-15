import React from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({route, navigation}) => {
  const {paletteName, colors} = route.params;
  navigation.setOptions({title: route.params.paletteName});

  return (
    <SafeAreaView>
      <FlatList
        style={{padding: 5}}
        data={colors}
        keyExtractor={item => item.hexCode}
        renderItem={({item}) => <ColorBox item={item} />}
        ListHeaderComponent={() => (
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            {' '}
            {paletteName}
          </Text>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.text}> Nothing is here</Text>
        )}
        ListFooterComponent={() => <Text> I am the footer</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textContainer: {
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  safearea: {flex: 1},
});
export default ColorPalette;
