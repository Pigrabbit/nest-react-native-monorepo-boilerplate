/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

const WelcomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={[styles.textXL, styles.appTitleText]} testID="heading">
              Welcome MobileApp 👋
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  textXL: {
    fontSize: 48,
  },
  section: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
});

export default WelcomeScreen;
