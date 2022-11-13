import React from 'react';

import usePopUp from '../../../hooks/usePopup';
import OutlinedButton from '../../Button/OutlinedButton';
import SecondaryButton from '../../Button/SecondaryButton';
import Typography from '../../Typography';
import PopUpBase from '../PopUpBase';
import { buttonStyles, textContentStyles, wrapperStyles } from './styles';

interface Props {
  title?: string;
  subDesc?: string;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
  onPressLeftButton?: () => void;
  onPressRightButton?: () => void;
}

const ConfirmPopUp = ({
  title = '',
  subDesc = '',
  leftButtonLabel = '취소',
  rightButtonLabel = '확인',
  onPressLeftButton,
  onPressRightButton,
}: Props) => {
  const { hidePopUp } = usePopUp();

  const renderTitle = () =>
    title.length > 0 ? (
      <Typography style={textContentStyles.title} variant="subtitle" fontWeight="bold">
        {title}
      </Typography>
    ) : null;

  const renderContents = () =>
    subDesc.length > 0 ? <Typography style={textContentStyles.subDesc}>{subDesc}</Typography> : null;

  const renderButtons = () => [
    <OutlinedButton
      key="leftButton"
      style={[buttonStyles.button, buttonStyles.firstButton]}
      label={leftButtonLabel}
      onPress={() => {
        hidePopUp();
        onPressLeftButton?.();
      }}
    />,
    <SecondaryButton
      key="rightButton"
      style={buttonStyles.button}
      label={rightButtonLabel}
      onPress={() => {
        hidePopUp();
        onPressRightButton?.();
      }}
    />,
  ];

  return (
    <PopUpBase
      renderTitle={renderTitle}
      renderContents={renderContents}
      renderButtons={renderButtons}
      popUpContainerStyle={wrapperStyles.popUp}
      textWrapperStyle={wrapperStyles.content}
      buttonWrapperStyle={wrapperStyles.button}
    />
  );
};

export default ConfirmPopUp;
