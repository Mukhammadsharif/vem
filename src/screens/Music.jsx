import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Background from '../icons/melodia-background.png';
import BackIcon from '../icons/back-yellow-icon.png';
import {useNavigation} from '@react-navigation/native';

export default function Music() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.background}
      imageStyle={styles.backgroundImage}>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Image style={styles.backIcon} source={BackIcon} />
      </TouchableOpacity>
      <Text style={styles.date}>07.03.2024</Text>
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
    color: '#FFFFFF',
    position: 'absolute',
    right: 25,
    bottom: 50,
    transform: [{rotate: '-25deg'}],
  },
  hour: {
    fontFamily: 'AlumniSans-ExtraBold',
    fontSize: 30,
    color: '#D3E5FF',
    position: 'absolute',
    right: 35,
    bottom: 30,
    transform: [{rotate: '-25deg'}],
  },
});
