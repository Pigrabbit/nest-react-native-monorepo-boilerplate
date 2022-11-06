import React from 'react';
import { StyleSheet, View } from 'react-native';

import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import Input from './Input';

storiesOf('Input', module)
  .addDecorator(getStory => <View style={styles.wrapper}>{getStory()}</View>)
  .add('default', () => (
    <Input
      value={text('input value', '')}
      placeholder={text('placeholder', 'placeholder')}
      subDesc={text('sub description', 'sub description')}
      disabled={boolean('disabled', false)}
      isError={boolean('error', false)}
      suffix={text('suffix', '원')}
    />
  ))
  .add('with sub desc', () => (
    <Input
      placeholder="placeholder"
      value="부가설명이 함께 있는 input입니다"
      subDesc="input에 대한 설명을 입력할 수 있습니다."
    />
  ))
  .add('disabled', () => (
    <Input
      placeholder="placeholder"
      value="비활성화 처리된 input입니다"
      subDesc="sub description"
      disabled={true}
    />
  ))
  .add('error', () => (
    <Input
      placeholder="placeholder"
      value="유효성 검사에 실패하면 보더가 빨갛게 변합니다"
      subDesc="부가설명도 빨갛게 변합니다"
      isError={true}
    />
  ))
  .add('suffix', () => (
    <Input
      placeholder="placeholder"
      value="suffix도 추가할 수 있습니다."
      subDesc="suffix는 문자열, 컴포넌트(아이콘) 모두 가능합니다."
    />
  ));

const styles = StyleSheet.create({
  wrapper: { padding: 20 },
});
