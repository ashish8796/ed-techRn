import React from 'react';
import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import Svg from 'react-native-svg';

interface ICreateIconProps {
  Icon: Svg;
  handlePress: () => void;
  iconStyle?: StyleProp<ViewStyle>;
}

export default function CreateIcon({
  Icon,
  handlePress,
  iconStyle,
}: ICreateIconProps) {
  return (
    <TouchableOpacity style={iconStyle} onPress={handlePress}>
      <Icon />
    </TouchableOpacity>
  );
}
