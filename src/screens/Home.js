import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')}>
        <Text style={{color: 'black'}}> Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
