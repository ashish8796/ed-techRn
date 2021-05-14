import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

interface IPaginationProps {
  currentPage: number;
}

export default function Pagination({currentPage}: IPaginationProps) {
  const [current, setCurrent] = useState(currentPage);

  return (
    <View style={styles.paginationContainer}>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({item, index}) => (
          <View
            style={currentPage === index + 1 ? styles.current : styles.dot}
          />
        )}
        keyExtractor={(item, index) => '' + index}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'column',
    marginTop: 32,
  },

  current: {
    width: 16,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#65AAEA',
  },

  dot: {
    width: 6,
    height: 6,
    marginHorizontal: 28,
    backgroundColor: '#D5D4D4',
    borderRadius: 3,
  },
});
