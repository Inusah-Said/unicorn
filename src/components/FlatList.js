import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const Item = props => {
  return (
    <View style={styles.food}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};
const FlatListComponent = () => {
  const HOBBIES = [
    'sleeping',
    'coding',
    'twitter',
    'watching series in 30 minutes',
  ];

  return (
    <FlatList
      data={HOBBIES}
      renderItem={item => <Item name={item} />}
      keyExtractor={item => item}
    />
  );
};

const styles = StyleSheet.create({
  food: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'teal',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default FlatListComponent;
