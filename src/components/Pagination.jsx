import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function Pagination({totalDots, currentPage}) {
  return (
    <View style={styles.container}>
      {[...Array(totalDots)].map((_, index) => (
        <View key={index} style={[styles.dot]}>
          <View
            style={index === currentPage ? styles.active : styles.passive}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 50,
    marginHorizontal: 5,
    borderColor: '#FFBA30',
    borderWidth: 1,
    padding: 2,
  },
  active: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#FFBA30',
  },
  passive: {},
});
