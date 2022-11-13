import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import useToast from '../../hooks/useToast';
import { CheckGreenIcon } from '../../styles/assets';
import Typography from '../Typography';
import { toastStyles } from './styles';

const Toast = () => {
  const { isVisible, message, duration, dismiss } = useToast();

  const animationRef = useRef(new Animated.Value(0));
  const opacity = animationRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const translateY = animationRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const fadeInAnimation = Animated.timing(animationRef.current, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  });

  const fadeOutAnimation = Animated.timing(animationRef.current, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  });

  const showAndDismiss = () => {
    Animated.sequence([fadeInAnimation, Animated.delay(duration), fadeOutAnimation]).start(() => dismiss());
  };

  useEffect(() => {
    if (!isVisible) return;

    showAndDismiss();
  }, [isVisible]);

  return (
    <Animated.View style={[toastStyles.container, { opacity, transform: [{ translateY }] }]} pointerEvents="none">
      <CheckGreenIcon width="24" height="24" />
      <Typography style={toastStyles.message} numberOfLines={1} ellipsizeMode="tail">
        {message}
      </Typography>
    </Animated.View>
  );
};

export default Toast;
