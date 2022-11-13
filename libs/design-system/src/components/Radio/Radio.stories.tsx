import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Radio from '.';

storiesOf('Radio', module)
  .addDecorator((getStory) => <View style={styles.wrapper}>{getStory()}</View>)
  .add('default', () => (
    <Radio
      disabled={boolean('활성화', false)}
      label={text('라벨', 'label')}
      onPress={action('onPress')}
      isSelected={boolean('체크', false)}
    />
  ))
  .add('라벨 없는 경우', () => <Radio isSelected />)
  .add('비활성화 된 경우', () => <Radio disabled isSelected />);

const styles = StyleSheet.create({
  wrapper: { padding: 20 },
});
