import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
  ImageBackground,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import Main from './screens/Main';
import {COLORS} from './helpers/customColor';
import Background from './icons/main-background.png';
import CloseIcon from './icons/baket-delete-icon.png';
import Logo from './icons/vem-logo.png';
import ReserveTable from './screens/ReserveTable';
import ReserveDone from './screens/ReserveDone';
import Profile from './screens/Profile';
import OrderDone from './screens/OrderDone';
import Translations from './screens/Translations';
import Events from './screens/Events';
import Basketball from './screens/Basketball';
import Playstation from './screens/Playstation';
import Music from './screens/Music';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="ReserveTable" component={ReserveTable} />
      <Drawer.Screen name="ReserveDone" component={ReserveDone} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="OrderDone" component={OrderDone} />
      <Drawer.Screen name="Translations" component={Translations} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Basketball" component={Basketball} />
      <Drawer.Screen name="Playstation" component={Playstation} />
      <Drawer.Screen name="Music" component={Music} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <ImageBackground source={Background} style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={CloseIcon} style={styles.close} />
          </TouchableOpacity>
        </View>

        <Image source={Logo} style={styles.logo} />

        <View style={styles.mainContainer}>
          <LinearGradient
            colors={['#61C9DC', '#AAEBF7']}
            style={styles.drawerItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
              <Text style={styles.itemText}>Главная</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#61C9DC', '#AAEBF7']}
            style={styles.drawerItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ReserveTable')}>
              <Text style={styles.itemText}>Бронь столика</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#61C9DC', '#AAEBF7']}
            style={styles.drawerItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Translations')}>
              <Text style={styles.itemText}>Трансляции</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#61C9DC', '#AAEBF7']}
            style={styles.drawerItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Events')}>
              <Text style={styles.itemText}>События</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#61C9DC', '#AAEBF7']}
            style={styles.drawerItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.itemText}>Личный кабинет</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.main,
    height: Platform.OS === 'ios' ? height : height,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerItem: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  itemText: {
    color: COLORS.black,
    fontSize: 26,
    fontFamily: 'AlumniSans-Bold',
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'AlumniSans-Medium',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 20,
    height: 20,
  },
  logo: {
    aspectRatio: 2.8,
    height: 100,
    alignSelf: 'center',
    marginTop: height / 20,
    marginBottom: 20,
  },
});
