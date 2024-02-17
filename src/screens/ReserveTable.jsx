import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  TextInput,
} from 'react-native';
import Background from '../icons/reserve-main-background.png';
import BackButton from '../icons/back-yellow-icon.png';
import HamburgerButton from '../icons/burger-icon.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import CustomButton from '../components/CustomButton';

export default function ReserveTable() {
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

      <Text style={styles.title}>Бронь столика:</Text>

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder={'Имя..'}
          placeholderTextColor={'#565555'}
        />

        <TextInput
          style={styles.input}
          placeholder={'E-mail'}
          placeholderTextColor={'#565555'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Номер телефона'}
          placeholderTextColor={'#565555'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Дата'}
          placeholderTextColor={'#565555'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Время'}
          placeholderTextColor={'#565555'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Номер столика'}
          placeholderTextColor={'#565555'}
        />
      </View>

      <CustomButton
        text={'Подтвердить '}
        onPress={() => navigation.navigate('ReserveDone')}
      />
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
  title: {
    color: COLORS.black,
    fontSize: 30,
    fontFamily: 'AlumniSans-Bold',
    paddingLeft: 20,
    marginTop: 20,
  },
  main: {
    width: '80%',
    backgroundColor: '#97CADA',
    borderRadius: 8,
    paddingBottom: 80,
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    borderColor: '#828080',
    borderBottomWidth: 0.5,
    width: '90%',
    paddingLeft: 5,
    fontFamily: 'AlumniSans-Bold',
    color: '#828080',
    marginTop: 10,
    height: 40,
    fontSize: 20,
    alignSelf: 'center',
  },
});
