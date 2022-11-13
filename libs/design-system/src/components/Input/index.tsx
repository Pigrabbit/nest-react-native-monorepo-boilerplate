import React, { forwardRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

import { Colors } from '../../styles/colors';
import { wrapperStyles, textInputStyles, subDescStyles, suffixStyles } from './styles';

interface Props extends TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  subDesc?: string;
  value: string;
  isError?: boolean;
  inputStyle?: TextStyle;
  suffix?: string | JSX.Element;
  suffixStyle?: TextStyle;
}

const Input = forwardRef<TextInput, Props>(
  ({ subDesc, isError, disabled, inputStyle, suffixStyle, suffix, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const getTextInputStyle = (): TextStyle | undefined => {
      if (isFocused) return textInputStyles.focused;
      if (isError) return textInputStyles.error;
      if (disabled) return textInputStyles.disabled;
    };

    const getSubDescStyle = (): TextStyle | undefined => {
      if (isError) return subDescStyles.error;
      if (disabled) return subDescStyles.disabled;
    };

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    return (
      <View>
        <View style={wrapperStyles.inputWrapper}>
          <TextInput
            ref={ref}
            style={StyleSheet.flatten([textInputStyles.primary, getTextInputStyle(), inputStyle])}
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            selectionColor={Colors.ORANGE90}
            selectTextOnFocus={!disabled}
            editable={!disabled}
            placeholderTextColor={Colors.GRAY40}
          />
          {Boolean(suffix) && <Text style={StyleSheet.flatten([suffixStyles.primary, suffixStyle])}>{suffix}</Text>}
        </View>
        {Boolean(subDesc) && (
          <Text style={StyleSheet.flatten([subDescStyles.primary, getSubDescStyle()])}>{subDesc}</Text>
        )}
      </View>
    );
  }
);

export default Input;
