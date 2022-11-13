import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import Badge from '.';

storiesOf('Badge', module)
  .add('default', () => (
    <Badge
      label={text('뱃지 라벨', 'text')}
      colorScheme={select(
        '뱃지 컬러',
        {
          orange: 'orange',
          red: 'red',
          green: 'green',
          gray: 'gray',
        },
        'green'
      )}
    />
  ))
  .add('orange', () => <Badge label="text" colorScheme="orange" />)
  .add('green', () => <Badge label="text" colorScheme="green" />)
  .add('red', () => <Badge label="text" colorScheme="red" />)
  .add('gray', () => <Badge label="text" colorScheme="gray" />);
