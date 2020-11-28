import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {useSelector, useDispatch} from 'react-redux';
import {getCoordinatCreator} from '../redux/action/coordinat';
import markerLogo from '../asset/img/marker.png';

const Map = () => {
  const {coordinat} = useSelector((state) => state);
  const [region, setRegion] = useState({
    latitude: -6.884831231113922,
    longitude: 108.7806924059987,
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -6.884831231113922,
          longitude: 108.7806924059987,
          latitudeDelta: 37.326806265848965,
          longitudeDelta: 22.384255975484876,
        }}
        onPress={(e) => {
          setRegion({
            ...region,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
          dispatch(
            getCoordinatCreator(
              e.nativeEvent.coordinate.latitude,
              e.nativeEvent.coordinate.longitude,
            ),
          );
        }}
        onPoiClick={(e) => {
          setRegion({
            ...region,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
          dispatch(
            getCoordinatCreator(
              e.nativeEvent.coordinate.latitude,
              e.nativeEvent.coordinate.longitude,
            ),
          );
        }}>
        {coordinat.listCoordinat.length === 0
          ? null
          : coordinat.listCoordinat.map((item, index) => {
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                  }}
                />
              );
            })}
        <Marker
          image={markerLogo}
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
