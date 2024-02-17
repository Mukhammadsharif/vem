import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../icons/cart-full-background.png';
import Background2 from '../icons/cart-empty-background.png';
import BackButton from '../icons/back-yellow-icon.png';
import HamburgerButton from '../icons/burger-icon.png';
import {COLORS} from '../helpers/customColor';
import CustomButton from '../components/CustomButton';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../components/CartItem';
import CartEmptyIcon from '../icons/cart-empty-icon.png';

const {height} = Dimensions.get('window');
export default function Profile() {
  const navigation = useNavigation();
  const {refresh} = useContext(GlobalContext);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCart = async () => {
      const list = await AsyncStorage.getItem('cartList');
      if (list?.length) {
        setCart(JSON.parse(list));
      } else {
        setCart(null);
      }
    };

    getCart();
  }, [refresh]);

  useEffect(() => {
    if (cart?.length) {
      let sum = 0;
      cart.forEach(product => {
        sum += product.price * product.count;
      });

      setPrice(sum);
    }
  }, [cart, refresh]);

  return (
    <ImageBackground
      source={cart?.length ? Background : Background2}
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

      {cart?.length ? <Text style={styles.title}>Ваш заказ:</Text> : ''}

      {cart?.length ? (
        <View style={styles.main}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {cart?.length
              ? cart.map((item, index) => (
                  <CartItem cart={item} key={item.name} />
                ))
              : ''}
          </ScrollView>

          {cart?.length ? <Text style={styles.price}>Итого:</Text> : ''}

          {cart?.length ? <Text style={styles.price}>{price} ₽</Text> : ''}
        </View>
      ) : (
        ''
      )}

      {cart?.length ? (
        <CustomButton
          text={'Подтвердить '}
          onPress={() => navigation.navigate('OrderDone')}
        />
      ) : (
        ''
      )}

      {!cart?.length ? (
        <View style={styles.cartEmptyMain}>
          <Image source={CartEmptyIcon} style={styles.cartEmptyIcon} />
          <Text style={styles.cartEmptyTitle}>
            В вашей корзине нет товаров!
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Text style={styles.goBack}>
              Вернуться в{' '}
              <Text style={{textDecorationLine: 'underline'}}>меню</Text>
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
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
    paddingHorizontal: 10,
    height: height / 1.6,
  },
  price: {
    textAlign: 'right',
    fontSize: 32,
    fontFamily: 'AlumniSans-SemiBold',
    color: COLORS.black,
  },
  goBack: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'AlumniSans-Light',
    color: COLORS.black,
  },
  cartEmptyMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartEmptyIcon: {
    height: 80,
    aspectRatio: 2,
    resizeMode: 'contain',
  },
  cartEmptyTitle: {
    color: '#82A2CF',
    fontSize: 30,
    fontFamily: 'AlumniSans-Medium',
    paddingLeft: 20,
    marginTop: 20,
  },
});
