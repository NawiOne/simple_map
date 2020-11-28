import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCoordinatCreator} from '../redux/action/coordinat';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const TopMenu = () => {
  const {coordinat} = useSelector((state) => state);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const show = () => {
    setVisible(!visible);
  };

  return (
    <>
      <View style={style.container}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          My Map
        </Text>
        <Icon
          name="dots-three-vertical"
          size={23}
          color="black"
          onPress={() => show()}
        />
      </View>
      <Overlay
        isVisible={visible}
        overlayStyle={style.overlay}
        backdropStyle={style.backdrop}
        onBackdropPress={() => show()}>
        <View>
          <TouchableOpacity
            style={{marginBottom: 10}}
            onPress={() => {
              dispatch(
                addCoordinatCreator(
                  coordinat.curentCoordinat.latitude,
                  coordinat.curentCoordinat.longitude,
                  coordinat.curentCoordinat.latDelta,
                  coordinat.curentCoordinat.longDelta,
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 23,
    paddingLeft: 23,
    height: 50,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 50,
    right: '10%',
    width: '40%',
    paddingBottom: '40%',
  },
  backdrop: {
    backgroundColor: 'transparent',
  },
});

export default TopMenu;
