import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

import {useSelector, useDispatch} from 'react-redux';
import {getCoordinatCreator} from '../redux/action/coordinat';
import markerLogo from '../asset/img/marker.png';

const Map = () => {
  const {coordinate} = useSelector((state) => state);
  const [region, setRegion] = useState({
    latitude: -6.884831231113922,
    longitude: 108.7806924059987,
  });
  const [curentLoc, setLoc] = useState({
    latitude: -7.198528,
    longitude: 109.1576702,
  });

  const dispatch = useDispatch();

  const getCurentLoc = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        setLoc({
          ...curentLoc,
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch((error) => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  useEffect(() => {
    getCurentLoc();
    console.log(curentLoc);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: curentLoc.latitude,
          longitude: curentLoc.longitude,
          latitudeDelta: 3,
          longitudeDelta: 3,
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
        {coordinate.listCoordinate.length === 0
          ? null
          : coordinate.listCoordinate.map((item, index) => {
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
