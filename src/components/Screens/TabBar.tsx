import React from 'react';
import {Dimensions} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';

interface ITabBarProps {}

export default function TabBar({}: ITabBarProps) {
  return <View style={styles.tabBarBox}></View>;
}

const styles = StyleSheet.create({
  tabBarBox: {
    width: Dimensions.get('screen').width - 0.4,
    height: 98,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    bottom: 0,
  },
});
