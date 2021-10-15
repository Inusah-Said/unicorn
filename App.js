import React from 'react';

import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ColorBox from './src/components/ColorBox';
import FlatListComponent from './src/components/FlatList';
const App = () => {
  const data = [
    {
      color: 'Cyan',
      hex: '#2aa198',
    },
    {
      color: 'Blue',
      hex: '#268bd2',
    },
    {
      color: 'Magenta',
      hex: '#d33682',
    },
    {
      color: 'Orange',
      hex: '#cb4b16',
    },
  ];
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        {/* <View style={styles.textContainer}>
          <Text>Here are some boxes of different colours</Text>
        </View> */}

        {/* <ColorBox data={data} /> */}
        <FlatListComponent />
      </View>
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
export default App;
