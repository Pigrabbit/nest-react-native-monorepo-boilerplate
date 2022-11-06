import React from 'react';
import { StyleSheet, View } from 'react-native';

import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import Toggle from '.';

storiesOf('Toggle', module)
  .addDecorator(getStory => <View style={styles.wrapper}>{getStory()}</View>)
  .add('default', () => (
    <Toggle
      disabled={boolean('비활성화', false)}
      onPress={action('onPress')}
      isToggleOn={boolean('체크', false)}
    />
  ))
  .add('비활성화 된 경우', () => <Toggle disabled isToggleOn />);

const styles = StyleSheet.create({
  wrapper: { padding: 20 },
});
