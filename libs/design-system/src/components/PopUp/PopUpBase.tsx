import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface Props {
  renderTitle?: () => React.ReactNode;
  renderContents?: () => React.ReactNode;
  renderButtons: () => React.ReactNode[] | React.ReactNode;
  popUpContainerStyle: StyleProp<ViewStyle>;
  textWrapperStyle?: StyleProp<ViewStyle>;
  buttonWrapperStyle?: StyleProp<ViewStyle>;
}

const PopUpBase = ({
  renderTitle,
  renderContents,
  renderButtons,
  popUpContainerStyle,
  textWrapperStyle,
  buttonWrapperStyle,
}: Props) => (
  <View style={popUpContainerStyle}>
    <View style={textWrapperStyle}>
      {renderTitle?.()}
      {renderContents?.()}
    </View>
    <View style={buttonWrapperStyle}>{renderButtons()}</View>
  </View>
);

export default PopUpBase;
