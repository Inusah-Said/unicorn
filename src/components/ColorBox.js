import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
const ColorBox = ({item}) => {
  const textStyle = {
    color:
      parseInt(item.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View
      key={item.color}
      style={[styles.textContainer, {backgroundColor: item.hexCode}]}>
      <Text style={[styles.text, textStyle]}>
        {item.colorName}: {item.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {},
});

export default ColorBox;
