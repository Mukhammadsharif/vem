import React from 'react';
import {View, StyleSheet} from 'react-native';
import {producs} from '../products/products';
import Card from './Card';
import CardRight from './CardRight';
import CardLeft from './CardLeft';

export default function Drinks() {
  return (
    <View style={styles.container}>
      {producs[3].map((item, index) => {
        if (index % 2 === 0) {
          return <CardRight item={item} key={item.name} />;
        } else {
          return <CardLeft item={item} key={item.name} />;
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
