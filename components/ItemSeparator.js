// ItemSeparator component! 
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 10, // Adjust the height for your gap
    width: '100%',
    backgroundColor: 'transparent', // Or any color you want the separator to be
  },
});

export default ItemSeparator;
