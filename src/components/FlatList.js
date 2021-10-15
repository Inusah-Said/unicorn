import React from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Food = props => {
  return (
    <View style={[styles.food, {backgroundColor: props.name.hexCode}]}>
      <Text style={styles.text}>
        {props.name.colorName} : {props.name.hexCode}
      </Text>
    </View>
  );
};

const COLORS = [
  {colorName: 'Base03', hexCode: '#002b36'},
  {colorName: 'Base02', hexCode: '#073642'},
  {colorName: 'Base01', hexCode: '#586e75'},
  {colorName: 'Base00', hexCode: '#657b83'},
  {colorName: 'Base0', hexCode: '#839496'},
  {colorName: 'Base1', hexCode: '#93a1a1'},
  {colorName: 'Base2', hexCode: '#eee8d5'},
  {colorName: 'Base3', hexCode: '#fdf6e3'},
  {colorName: 'Yellow', hexCode: '#b58900'},
  {colorName: 'Orange', hexCode: '#cb4b16'},
  {colorName: 'Red', hexCode: '#dc322f'},
  {colorName: 'Magenta', hexCode: '#d33682'},
  {colorName: 'Violet', hexCode: '#6c71c4'},
  {colorName: 'Blue', hexCode: '#268bd2'},
  {colorName: 'Cyan', hexCode: '#2aa198'},
  {colorName: 'Green', hexCode: '#859900'},
];

const FlatListComponent = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={{padding: 5}}
        data={COLORS}
        keyExtractor={item => item.hexCode}
        renderItem={({item}) => <ColorBox item={item} />}
        ListHeaderComponent={() => (
          <Text style={{fontSize: 18, fontWeight: 'bold'}}> Solarized</Text>
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
