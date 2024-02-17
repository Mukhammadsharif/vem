import React from 'react';
import {StyleSheet, View} from 'react-native';
import {producs} from '../products/products';
import CardRight from './CardRight';
import CardLeft from './CardLeft';

export default function Rolls() {
  return (
    <View style={styles.container}>
      {producs[0].map((item, index) => {
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
