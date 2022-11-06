import React from 'react';
import { StyleSheet, View } from 'react-native';

import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import CheckBox from '.';

storiesOf('CheckBox', module)
  .addDecorator(getStory => <View style={styles.wrapper}>{getStory()}</View>)
  .add('default', () => (
    <CheckBox
      disabled={boolean('활성화', false)}
      label={text('라벨', 'label')}
      onPress={action('onPress')}
      isChecked={boolean('체크', false)}
    />
  ))
  .add('라벨 없는 경우', () => <CheckBox isChecked />)
  .add('비활성화 된 경우', () => <CheckBox disabled isChecked />);

const styles = StyleSheet.create({
  wrapper: { padding: 20 },
});
