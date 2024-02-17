import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../icons/translations-background.png';
import BackButton from '../icons/back-yellow-icon.png';
import HamburgerButton from '../icons/burger-icon.png';
import CardShape from '../icons/tranlation-card.png';
import TennisIcon from '../icons/tennis-icon.png';
import RegbyIcon from '../icons/regby-icon.png';
import BallIcon from '../icons/ball-icon.png';
import {COLORS} from '../helpers/customColor';

export default function Translations() {
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

      <View style={styles.card}>
        <View style={styles.left}>
          <View style={styles.relative}>
            <Image source={CardShape} style={styles.shape} />
            <Text style={styles.text}>Abu Dhabi {'\n'} Tennis Open</Text>
          </View>
          <Image source={TennisIcon} style={styles.tennis} />
        </View>

        <View style={styles.right}>
          <Text style={styles.cardText}>Rybakina {'\n'} Samsonova</Text>

          <View style={styles.divider} />

          <Text style={styles.date}>10/02 13:00</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.left}>
          <View style={styles.relative}>
            <Image source={CardShape} style={styles.shape} />
            <Text style={styles.secondText}>NFL</Text>
          </View>
          <Image source={RegbyIcon} style={styles.tennis} />
        </View>

        <View style={styles.right}>
          <Text style={styles.cardText}>
            Treasury City {'\n'} San Francisco
          </Text>

          <View style={styles.divider} />

          <Text style={styles.date}>12/02 15:00</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.left}>
          <View style={styles.relative}>
            <Image source={CardShape} style={styles.shape} />
            <Text style={styles.secondText}>NBA</Text>
          </View>
          <Image source={BallIcon} style={styles.tennis} />
        </View>

        <View style={styles.right}>
          <Text style={styles.cardText}>Atlanta {'\n'} Toronto</Text>

          <View style={styles.divider} />

          <Text style={styles.date}>24/02 19:00</Text>
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
  shape: {
    height: 60,
    aspectRatio: 2.5,
    resizeMode: 'contain',
  },
  tennis: {
    height: 70,
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
  left: {
    width: '40%',
  },
  relative: {
    position: 'relative',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
    right: 20,
    top: 5,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.white,
    fontSize: 20,
  },
  right: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: 8,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    borderRadius: 8,
  },
  cardText: {
    color: '#071597',
    fontFamily: 'AlumniSans-Bold',
    fontSize: 27,
    textAlign: 'center',
  },
  divider: {
    width: '90%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: '#071597',
  },
  date: {
    color: COLORS.black,
    fontFamily: 'AlumniSans-Bold',
    fontSize: 25,
    textAlign: 'center',
  },
  secondText: {
    position: 'absolute',
    textAlign: 'center',
    left: '35%',
    top: 0,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.white,
    fontSize: 50,
  },
});
