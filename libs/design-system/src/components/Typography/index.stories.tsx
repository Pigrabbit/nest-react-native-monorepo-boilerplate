import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import Typography from '.';

storiesOf('Typography', module).add('default', () => (
  <Typography
    variant={select(
      'variant',
      {
        display: 'display',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        title: 'title',
        subtitle: 'subtitle',
        body: 'body',
        description: 'description',
        caption: 'caption',
      },
      'body'
    )}
    fontWeight={select(
      'fontWeight',
      {
        regular: 'regular',
        bold: 'bold',
      },
      'regular'
    )}
  >
    {text('text', '안녕하세요 고유입니다')}
  </Typography>
));
