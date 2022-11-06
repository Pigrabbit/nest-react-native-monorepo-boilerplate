import React from 'react';
import { View, ViewProps } from 'react-native';

import Typography from '../Typography';
import { badgeStyles, containerStyles, labelStyles } from './styles';

interface Props extends ViewProps {
  label: string;
  colorScheme: 'orange' | 'red' | 'green' | 'gray';
}

const Badge = ({ label, colorScheme = 'gray', style }: Props) => {
  return (
    <View style={[containerStyles.default, style]}>
      <View style={[badgeStyles.default, badgeStyles[colorScheme]]}>
        <Typography
          variant="caption"
          fontWeight="bold"
          style={labelStyles[colorScheme]}>
          {label}
        </Typography>
      </View>
    </View>
  );
};

export default Badge;
