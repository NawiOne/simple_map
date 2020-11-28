import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapComponent from '../../components/map';
import TopMenu from '../../components/topMenu';
import Coordinat from '../../components/coordinat';

const Home = () => {
  return (
    <View style={style.container}>
      <MapComponent />
      <TopMenu />
      <Coordinat />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
