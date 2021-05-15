import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {iconsObj} from '../../utils/icons';

interface IGoBackProps {
  handlePress: () => void;
  route?: string;
  goStyle: StyleProp<ViewStyle>;
}

export default function GoBack({handlePress, goStyle}: IGoBackProps) {
  const navigation = useNavigation();
  const Icon = iconsObj['go back'];

  return (
    <TouchableOpacity
      style={[styles.goBackContainer, goStyle]}
      onPress={handlePress}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goBackContainer: {
    borderColor: '#BEBAB3',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },

  iconStyle: {},
});
