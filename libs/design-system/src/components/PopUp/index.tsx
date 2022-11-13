import React, { PropsWithChildren } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

import usePopUp from '../../hooks/usePopup';
import AlertPopUp from './AlertPopUp';
import ConfirmPopUp from './ConfirmPopUp';

const PopUp = () => {
  const { isShown, options } = usePopUp();

  if (!isShown || !options) return null;

  const getPopUp = () => {
    switch (options.popUpType) {
      case 'ALERT':
        return <AlertPopUp {...options} />;
      case 'CONFIRM':
      default:
        return <ConfirmPopUp {...options} />;
    }
  };

  return <Backdrop visible={isShown}>{getPopUp()}</Backdrop>;
};

const Backdrop = ({ children, visible }: PropsWithChildren<{ visible: boolean }>) => (
  <Modal visible={visible} transparent={true}>
    <View style={styles.backdrop}>{children}</View>
  </Modal>
);
export default PopUp;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});
