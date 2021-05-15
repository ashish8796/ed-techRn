import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

interface IPaginationProps {
  currentPage: number;
}

export default function Pagination({currentPage}: IPaginationProps) {
  return (
    <View style={styles.paginationContainer}>
      <FlatList
        data={[0, 1, 2]}
        renderItem={({item, index}) => (
          <View style={currentPage === index ? styles.current : styles.dot} />
        )}
        keyExtractor={(item, index) => '' + index}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    height: 6,
    flexDirection: 'column',
  },

  current: {
    width: 16,
    height: 6,
    borderRadius: 4,
    marginLeft: 18,
    backgroundColor: '#65AAEA',
  },

  dot: {
    width: 6,
    height: 6,
    marginLeft: 18,
    backgroundColor: '#D5D4D4',
    borderRadius: 3,
  },
});
