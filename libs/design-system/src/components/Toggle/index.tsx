import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Pressable,
  PressableProps,
  View,
} from 'react-native';

import { toggleStyles, containerStyles, knobStyle } from './styles';

interface Props extends PressableProps {
  isToggleOn: boolean;
}

const Toggle = ({ isToggleOn, disabled, onPress, style, ...props }: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 19],
  });

  const toggleAnimation = Animated.timing(animatedValue, {
    toValue: isToggleOn ? 1 : 0,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: true,
  });

  useEffect(() => {
    toggleAnimation.start();
  }, [isToggleOn, toggleAnimation]);

  return (
    <Pressable
      {...props}
      style={containerStyles.container}
      onPress={event => onPress?.(event)}
    >
      <View
        style={[
          toggleStyles.default,
          isToggleOn ? toggleStyles.on : toggleStyles.off,
          disabled ? toggleStyles.disabled : {},
        ]}
      >
        <Animated.View
          style={[
            knobStyle.default,
            disabled ? knobStyle.disabled : {},
            { transform: [{ translateX }] },
          ]}
        />
      </View>
    </Pressable>
  );
};

export default Toggle;
