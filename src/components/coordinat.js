import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {addCoordinatCreator} from '../redux/action/coordinat';

const Coordinat = () => {
  const {coordinate} = useSelector((state) => state);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(!visible);
  };

  return (
    <>
      <View style={style.container}>
        {coordinate.curentCoordinate.latitude === undefined ? null : (
          <Text style={style.coordinate} onPress={() => show()}>
            {coordinate.curentCoordinate.latitude},
            {coordinate.curentCoordinate.longitude}
          </Text>
        )}
      </View>
      <Overlay
        isVisible={visible}
        overlayStyle={style.overlay}
        onBackdropPress={() => show()}>
        <View>
          <TouchableOpacity
            style={{marginBottom: 10}}
            onPress={() => {
              dispatch(
                addCoordinatCreator(
                  coordinate.curentCoordinate.latitude,
                  coordinate.curentCoordinate.longitude,
                ),
              );
              setVisible(!visible);
            }}>
            <Text style={{fontWeight: 'bold'}}>Save coordinate</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '65%',
    height: 40,
    backgroundColor: '#D9CBC8',
    position: 'absolute',
    bottom: '10%',
    padding: 10,
    borderRadius: 20,
  },
  coordinate: {
    color: 'black',
    fontSize: 10,
  },
  overlay: {
    width: '50%',
    padding: 15,
    position: 'absolute',
    bottom: '30%',
    alignItems: 'center',
  },
  backdrop: {
    backgroundColor: 'transparent',
  },
});

export default Coordinat;
