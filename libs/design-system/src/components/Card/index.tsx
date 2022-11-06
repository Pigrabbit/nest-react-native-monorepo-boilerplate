import React from 'react';
import { View, ViewStyle } from 'react-native';

import { cardStyles } from './styles';

interface Props {
  children: React.ReactNode;
  cardStyle?: ViewStyle;
}

const Card = ({ children, cardStyle }: Props) => {
  return <View style={[cardStyles.container, cardStyle]}>{children}</View>;
};

export default Card;
