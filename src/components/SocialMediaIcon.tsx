import React from 'react';
import {View, Text} from 'react-native';
import Svg from 'react-native-svg';

interface ISocialMediaIconProps {
  Icon: Svg;
  handlePress: () => void;
}

export default function SocialMediaIcon({
  Icon,
  handlePress,
}: ISocialMediaIconProps) {
  return <Icon />;
}
