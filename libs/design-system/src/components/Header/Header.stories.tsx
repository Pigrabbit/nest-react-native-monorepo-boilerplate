import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Pressable, Text } from 'react-native';

import Header from '.';

storiesOf('Header', module)
  .add('default', () => <Header title={text('title', '헤더 타이틀')} borderBottom={boolean('하단 border', false)} />)
  .add('with left button', () => (
    <Header
      title={text('title', '헤더 타이틀')}
      borderBottom={boolean('하단 border', false)}
      headerLeft={
        <Pressable onPress={action('onPress')} hitSlop={{ top: 40, left: 40, bottom: 40, right: 40 }}>
          <Text>뒤로</Text>
        </Pressable>
      }
    />
  ))
  .add('with left and right button', () => (
    <Header
      title={text('title', '헤더 타이틀')}
      borderBottom={boolean('하단 border', false)}
      headerLeft={
        <Pressable onPress={action('onPress')} hitSlop={{ top: 40, left: 40, bottom: 40, right: 40 }}>
          <Text>뒤로</Text>
        </Pressable>
      }
      headerRight={
        <Pressable onPress={action('onPress')} hitSlop={{ top: 40, left: 40, bottom: 40, right: 40 }}>
          <Text>완료</Text>
        </Pressable>
      }
    />
  ));
