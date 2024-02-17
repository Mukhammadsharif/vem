import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import Background from '../icons/cart-done.png';
import BackButton from '../icons/back-yellow-icon.png';
import HamburgerButton from '../icons/burger-icon.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import QRCode from 'react-native-qrcode-svg';

const {width} = Dimensions.get('window');
export default function OrderDone() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.container}
      imageStyle={styles.background}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackButton} style={styles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={HamburgerButton} style={styles.hamButton} />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Text style={styles.title}>Спасибо за заказ!</Text>

        <View style={styles.qrContainer}>
          <QRCode
            value={'https://bringo.uz/restaurant/pizza-moscow-trc-mega-planet'}
            size={width / 3}
            color={COLORS.black}
            backgroundColor={'transparent'}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  button: {
    aspectRatio: 1.3,
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  hamButton: {
    aspectRatio: 2,
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: COLORS.black,
    fontSize: 30,
    fontFamily: 'AlumniSans-Bold',
    alignSelf: 'center',
    marginBottom: 50,
  },
});
