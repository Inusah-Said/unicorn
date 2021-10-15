import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const PalettePreview = ({palette, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{palette.paletteName}</Text>
    </TouchableOpacity>
  );
};

export default PalettePreview;
