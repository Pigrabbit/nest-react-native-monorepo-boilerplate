import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import { WINDOW_HEIGHT, WINDOW_WIDTH } from '~/constant/dimension';
import useToast from '~/hook/useToast';

import Toast from '.';
import { ToastContextProvider } from './ToastContext';

storiesOf('Toast', module)
  .addDecorator(getStory => (
    <ToastContextProvider>{getStory()}</ToastContextProvider>
  ))
  .add('default', () => <ToastWrapper />);

const ToastWrapper = () => {
  const { show } = useToast();

  return (
    <View style={styles.wrapper}>
      <Button
        title="show"
        onPress={() => show({ message: 'toast message', duration: 1000 })}
      />
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
});
