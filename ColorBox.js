import React from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';

const ColorBox = ({data}) => {
  return (
    <React.Fragment>
      {data.map(item => (
        <View
          key={item.color}
          style={[styles.textContainer, {backgroundColor: item.hex}]}>
          <Text style={styles.text}>
            {item.color}: {item.hex}
          </Text>
        </View>
      ))}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  text: {color: 'white'},
});

export default ColorBox;
