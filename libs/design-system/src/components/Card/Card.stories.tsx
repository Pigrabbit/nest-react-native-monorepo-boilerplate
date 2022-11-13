import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from '.';
import { Colors } from '../../styles/colors';
import CheckBox from '../CheckBox';
import Typography from '../Typography';

storiesOf('Card', module)
  .addDecorator((getStory) => <View style={styles.wrapper}>{getStory()}</View>)
  .add('default', () => (
    <Card>
      <Typography>카드 컴포넌트</Typography>
      <CheckBox label="체크박스도 넣을 수 있습니다" isChecked={true} />
    </Card>
  ));

const styles = StyleSheet.create({
  wrapper: { padding: 20, backgroundColor: Colors.GRAY10, flex: 1 },
});
