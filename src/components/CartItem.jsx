import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CloseIcon from '../icons/baket-delete-icon.png';
import {COLORS} from '../helpers/customColor';

const {height, width} = Dimensions.get('window');
export default function CartItem({cart}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCarts(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  const increment = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === cart.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          newArray[selectedIndex].count = newArray[selectedIndex].count + 1;
          await AsyncStorage.setItem('cartList', JSON.stringify(carts));
          await setRefresh(!refresh);
        }
      }
    }
  };

  const decrement = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === cart.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          if (newArray[selectedIndex].count > 0) {
            newArray[selectedIndex].count = newArray[selectedIndex].count - 1;
            await AsyncStorage.setItem('cartList', JSON.stringify(carts));
            await setRefresh(!refresh);
          }
        }
      }
    }
  };

  const deleteItem = async () => {
    if (carts?.length) {
      const newArray = carts.filter(product => product.name !== cart.name);
      await setCarts(newArray);
      await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      await setRefresh(!refresh);
    }
  };
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text style={styles.name}>{cart.name}</Text>

        <TouchableOpacity onPress={() => deleteItem()}>
          <Image source={CloseIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <View style={styles.countContainer}>
          <TouchableOpacity
            onPress={() => {
              if (cart.count > 1) {
                decrement();
              }
            }}>
            <Text style={styles.action}>-</Text>
          </TouchableOpacity>

          <Text style={styles.count}>{cart?.count}</Text>

          <TouchableOpacity onPress={() => increment()}>
            <Text style={styles.action}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowRound}>
          <View style={styles.round} />
          <Text style={styles.name}>{cart.price} ₽</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#828080',
    paddingVertical: 4,
  },
  icon: {
    width: 15,
    height: 15,
  },
  info: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 3,
  },
  image: {
    height: 150,
    width: width * 0.45,
    borderRadius: 8,
  },
  name: {
    color: COLORS.black,
    fontFamily: 'AlumniSans-Bold',
    fontSize: 20,
  },
  description: {
    color: COLORS.black,
    fontFamily: 'Montserrat-Light',
    fontWeight: '200',
    fontSize: 10,
    paddingTop: 3,
    height: 30,
    width: width * 0.35,
  },
  price: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 16,
    color: COLORS.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rowRound: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.4,
    paddingTop: 5,
  },
  countContainer: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 3,
    backgroundColor: '#FBD406',
    borderRadius: 8,
  },
  round: {
    backgroundColor: '#FBD406',
    width: 10,
    height: 10,
    borderRadius: 50,
    marginRight: 20,
  },
  action: {
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.black,
    fontSize: 18,
  },
  count: {
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.black,
    marginHorizontal: 15,
    fontSize: 18,
  },
  button: {
    borderRadius: 8,
    backgroundColor: COLORS.main,
    width: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
  },
  buttonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    color: COLORS.white,
    fontWeight: '700',
  },
});
