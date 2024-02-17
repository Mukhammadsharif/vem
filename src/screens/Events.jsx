import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import Background from '../icons/events-background.png';
import BackButton from '../icons/back-yellow-icon.png';
import HamburgerButton from '../icons/burger-icon.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import Basketball from '../icons/backetball-icon.png';
import Playstation from '../icons/playstation-icon.png';
import Music from '../icons/music-icon.png';

export default function Events() {
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

      <View style={styles.titleContainer}>
        <View style={styles.ball} />
        <View style={styles.titleBox}>
          <Text style={styles.title}>События</Text>
        </View>
        <View style={styles.ball} />
      </View>

      <ScrollView
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Basketball')}>
          <View style={styles.card}>
            <Image source={Basketball} style={styles.icon} />

            <Text style={styles.cardText}>Баскетбольный {'\n'} фан-клуб</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.date}>29.02.2024</Text>
            <Text style={styles.hour}>19:00</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Playstation')}>
          <View style={styles.card}>
            <Image source={Playstation} style={styles.icon} />

            <Text style={styles.cardText}>PlayStation {'\n'} Турнир</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.date}>05.03.2024</Text>
            <Text style={styles.hour}>16:00</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('Music')}>
          <View style={styles.card}>
            <Image source={Music} style={styles.icon} />

            <Text style={styles.cardText}>“Угадай мелодию” {'\n'}</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.date}>07.03.2024</Text>
            <Text style={styles.hour}>18:00</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
  titleContainer: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.black,
    fontSize: 30,
  },
  titleBox: {
    marginHorizontal: 15,
    backgroundColor: '#FFBF30',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  ball: {
    width: 30,
    height: 30,
    backgroundColor: '#FFBF30',
    borderRadius: 50,
  },
  card: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    borderRadius: 8,
    marginTop: 10,
  },
  main: {
    width: '100%',
    flexDirection: 'column',
    paddingTop: 20,
  },
  cardContainer: {
    alignSelf: 'center',
    width: '40%',
  },
  icon: {
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 15,
  },
  cardText: {
    textAlign: 'center',
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.black,
    fontSize: 22,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 4,
  },
  date: {
    color: '#071597',
    fontFamily: 'AlumniSans-Bold',
    fontSize: 18,
  },
  hour: {
    color: '#3064AB',
    fontFamily: 'AlumniSans-Bold',
    fontSize: 18,
  },
});
