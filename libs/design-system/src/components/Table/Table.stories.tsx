import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Table, Row } from '.';

storiesOf('Table', module)
  .addDecorator((getStory) => <View style={styles.wrapper}>{getStory()}</View>)
  .add('default', () => (
    <Table>
      <Row header={text('헤더', '매장')} data={text('데이터', '서울대점')} />
    </Table>
  ))
  .add('로우가 2개 이상', () => (
    <Table>
      <Row header="매장" data="서울대점" />
      <Row header="이용좌석" data="A1" />
      <Row header="입실시각" data="2022년 5월 1일 20:00" />
    </Table>
  ));

const styles = StyleSheet.create({
  wrapper: { padding: 20 },
});
