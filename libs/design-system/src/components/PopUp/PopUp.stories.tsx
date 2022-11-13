import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import PopUp from '.';
import PrimaryButton from '../Button/PrimaryButton';
import { PopUpContextProvider } from './PopUpContext';

import usePopUp from '~/hook/usePopup';

storiesOf('PopUp', module)
  .addDecorator((getStory) => (
    <PopUpContextProvider>
      <PopUp />
      {getStory()}
    </PopUpContextProvider>
  ))
  .add('confirm popup', () => {
    return <ConfirmPopUpWrapper />;
  })
  .add('alert popup', () => {
    return <AlertPopUpWrapper />;
  });

const ConfirmPopUpWrapper = () => {
  const { showConfirmPopUp } = usePopUp();
  return (
    <PrimaryButton
      label="팝업 열기"
      onPress={() => {
        showConfirmPopUp({
          title: text('타이틀', 'title'),
          subDesc: text('부가설명', 'subDesc'),
          leftButtonLabel: text('왼쪽 버튼 라벨', '취소'),
          rightButtonLabel: text('오른쪽 버튼 라벨', '확인'),
          onPressLeftButton: action('onPressLeftButton'),
          onPressRightButton: action('onPressRightButton'),
        });
      }}
    />
  );
};

const AlertPopUpWrapper = () => {
  const { showAlertPopUp } = usePopUp();
  return (
    <PrimaryButton
      label="팝업 열기"
      onPress={() => {
        showAlertPopUp({
          title: text('타이틀', 'title'),
          subDesc: text('부가설명', 'subDesc'),
          buttonLabel: text('버튼 라벨', '확인'),
          onPressButton: action('onPressButton'),
        });
      }}
    />
  );
};
