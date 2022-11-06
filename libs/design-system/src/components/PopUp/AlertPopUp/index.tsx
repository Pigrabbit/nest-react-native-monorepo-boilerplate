import React from 'react';

import usePopUp from '../../../hooks/usePopup';

import OutlinedButton from '../../Button/OutlinedButton';
import Typography from '../../Typography';
import PopUpBase from '../PopUpBase';
import { buttonStyles, textContentStyles, wrapperStyles } from './styles';

interface Props {
  title?: string;
  subDesc?: string;
  buttonLabel?: string;
  onPressButton?: () => void;
}

const AlertPopUp = ({
  title = '',
  subDesc = '',
  buttonLabel = '확인',
  onPressButton,
}: Props) => {
  const { hidePopUp } = usePopUp();

  const renderTitle = () =>
    title.length > 0 ? (
      <Typography
        style={textContentStyles.title}
        variant="subtitle"
        fontWeight="bold"
      >
        {title}
      </Typography>
    ) : null;

  const renderContents = () =>
    subDesc.length > 0 ? (
      <Typography style={textContentStyles.subDesc}>{subDesc}</Typography>
    ) : null;

  const renderButton = () => (
    <OutlinedButton
      style={[buttonStyles.button]}
      label={buttonLabel}
      onPress={() => {
        hidePopUp();
        onPressButton?.();
      }}
    />
  );

  return (
    <PopUpBase
      renderTitle={renderTitle}
      renderContents={renderContents}
      renderButtons={renderButton}
      popUpContainerStyle={wrapperStyles.popUp}
      textWrapperStyle={wrapperStyles.content}
      buttonWrapperStyle={wrapperStyles.button}
    />
  );
};

export default AlertPopUp;
