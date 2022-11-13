import { NavigationContainer } from '@react-navigation/native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Dropdown from '.';
import { DropdownContextProvider } from './DropdownContext';
import { DropdownOptionsBottomSheet } from './DropdownOptionsBottomSheet';

storiesOf('Dropdown', module)
  .addDecorator((getStory) => (
    <NavigationContainer>
      <DropdownContextProvider>
        <View style={styles.wrapper}>{getStory()}</View>
        <DropdownOptionsBottomSheet />
      </DropdownContextProvider>
    </NavigationContainer>
  ))
  .add('default', () => (
    <>
      <View>
        <Dropdown
          options={[
            { value: '서울대입구점', label: '서울대입구점' },
            { value: '우형점', label: '우형점' },
            { value: '여의도점', label: '여의도점' },
            { value: '홍대입구점', label: '홍대입구점' },
            { value: '성수점', label: '성수점' },
            { value: '건대점', label: '건대점' },
            { value: '서울대입구점1', label: '서울대입구점1' },
            { value: '우형점1', label: '우형점1' },
            { value: '여의도점1', label: '여의도점1' },
            { value: '홍대입구점1', label: '홍대입구점1' },
            { value: '성수점1', label: '성수점1' },
            { value: '건대점1', label: '건대점1' },
          ]}
          name="dropdown-store"
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Dropdown
          options={[
            { value: '서울대입구점', label: '서울대입구점' },
            { value: '우형점', label: '우형점' },
            { value: '여의도점', label: '여의도점' },
          ]}
          name="dropdown-test"
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Dropdown
          disabled
          options={[
            { value: 'foo', label: '비활성화' },
            { value: 'bar', label: 'bar' },
            { value: 'baz', label: 'baz' },
          ]}
          name="dropdown-test"
        />
      </View>
    </>
  ));
const styles = StyleSheet.create({
  wrapper: { padding: 20 },
});
