import React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import KakaoButton from './KakaoButton';
import OutlinedButton from './OutlinedButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import TextPrimaryButton from './TextPrimaryButton';
import TextSecondaryButton from './TextSecondaryButton';

storiesOf('Button', module)
  .add('primary button', () => (
    <PrimaryButton
      label={text('라벨', '버튼')}
      onPress={action('onPress')}
      disabled={boolean('비활성화', false)}
    />
  ))
  .add('secondary button', () => (
    <SecondaryButton
      label={text('라벨', '버튼')}
      onPress={action('onPress')}
      disabled={boolean('비활성화', false)}
    />
  ))
  .add('outlined button', () => (
    <OutlinedButton
      label={text('라벨', '버튼')}
      onPress={action('onPress')}
      disabled={boolean('비활성화', false)}
      size={select('버튼 사이즈', { large: 'large', small: 'small' }, 'large')}
    />
  ))
  .add('text primary button', () => (
    <TextPrimaryButton
      label={text('라벨', '버튼')}
      onPress={action('onPress')}
      disabled={boolean('비활성화', false)}
      size={select('버튼 사이즈', { large: 'large', small: 'small' }, 'large')}
    />
  ))
  .add('text secondary button', () => (
    <TextSecondaryButton
      label={text('라벨', '버튼')}
      onPress={action('onPress')}
      disabled={boolean('비활성화', false)}
      size={select('버튼 사이즈', { large: 'large', small: 'small' }, 'large')}
    />
  ))
  .add('kakao button', () => (
    <KakaoButton
      label={text('라벨', '카카오톡으로 로그인')}
      onPress={action('onPress')}
    />
  ));
