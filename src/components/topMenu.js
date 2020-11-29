import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCoordinatCreator} from '../redux/action/coordinat';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const TopMenu = () => {
  const {coordinate} = useSelector((state) => state);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const show = () => {
    setVisible(!visible);
  };

  return (
    <>
      <View style={style.container}>
        <Icon name="menu" size={30} color="black" onPress={() => show()} />
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
    width: '30%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 23,
    paddingLeft: 23,
    height: 50,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  overlay: {
    position: 'absolute',
    top: 40,
    right: 28,
    width: '60%',
    paddingBottom: '40%',
  },
  backdrop: {
    backgroundColor: 'transparent',
  },
});

export default TopMenu;
