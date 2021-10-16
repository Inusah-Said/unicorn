import React from 'react';
import {TouchableOpacity, Text, FlatList, StyleSheet, View} from 'react-native';

const PalettePreview = ({palette, handlePress}) => {
  console.log(palette.colors.slice(0, 5));

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        style={styles.flatlist}
        data={palette.colors.slice(0, 5)}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => (
          <View style={[styles.box, {backgroundColor: item.hexCode}]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
  },
  flatlist: {
    flexDirection: 'row',
    padding: 5,
    marginBottom: 20,
  },
  box: {
    width: 30,
    height: 30,
    flexDirection: 'row',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});
export default PalettePreview;
