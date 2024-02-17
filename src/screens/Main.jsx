import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import BackButton from '../icons/back-yellow-icon.png';
import HamburgerButton from '../icons/burger-icon.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import Pagination from '../components/Pagination';
import Rolls from '../components/Rolls';
import Picca from '../components/Picca';
import Salats from '../components/Salats';
import Drinks from '../components/Drinks';
import Background from '../icons/menu-background.png';
export default function Main() {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / Dimensions.get('window').width);
    setCurrentPage(page);
  };

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

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={currentPage === 0 ? styles.active : styles.passive}>
          <Text
            style={currentPage === 0 ? styles.activeText : styles.passiveText}>
            Роллы
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={currentPage === 1 ? styles.active : styles.passive}>
          <Text
            style={currentPage === 1 ? styles.activeText : styles.passiveText}>
            Пицца
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={currentPage === 2 ? styles.active : styles.passive}>
          <Text
            style={currentPage === 2 ? styles.activeText : styles.passiveText}>
            Салаты
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={currentPage === 3 ? styles.active : styles.passive}>
          <Text
            style={currentPage === 3 ? styles.activeText : styles.passiveText}>
            Напитки
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={0}>
        <View style={styles.pageContainer}>
          <Rolls />
        </View>
        <View style={styles.pageContainer}>
          <Picca />
        </View>
        <View style={styles.pageContainer}>
          <Salats />
        </View>
        <View style={styles.pageContainer}>
          <Drinks />
        </View>
      </ScrollView>

      <Pagination totalDots={totalPages} currentPage={currentPage} />
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
    width: 35,
    height: 35,
  },
  hamButton: {
    aspectRatio: 2,
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 10,
  },
  active: {
    width: '44%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#58CDE3',
    marginTop: 15,
  },
  passive: {
    width: '44%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#FFBF30',
    marginTop: 15,
  },
  activeText: {
    justifyContent: 'center',
    color: COLORS.black,
    fontSize: 25,
    fontFamily: 'AlumniSans-Medium',
  },
  passiveText: {
    justifyContent: 'center',
    color: COLORS.black,
    fontSize: 25,
    fontFamily: 'AlumniSans-Regular',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  pageContainer: {
    width: Dimensions.get('window').width,
  },
});
