import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Background from '../icons/playstation-background.png';
import BackIcon from '../icons/back-whir.png';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';

export default function Playstation() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.background}
      imageStyle={styles.backgroundImage}>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Image style={styles.backIcon} source={BackIcon} />
      </TouchableOpacity>
      <Text style={styles.date}>29.02.2024</Text>
      <Text style={styles.hour}>18:00</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    resizeMode: 'stretch',
    paddingBottom: 50,
  },
  main: {
    flex: 1,
    paddingTop: 60,
  },
  backIcon: {
    height: 30,
    width: 30,
    marginTop: 30,
    marginLeft: 20,
  },
  date: {
    fontFamily: 'AlumniSans-ExtraBold',
    fontSize: 30,
    color: '#08137A',
    position: 'absolute',
    left: 25,
    top: 80,
  },
  hour: {
    fontFamily: 'AlumniSans-ExtraBold',
    fontSize: 30,
    color: '#FFFFFF',
    position: 'absolute',
    left: 25,
    top: 110,
  },
});
