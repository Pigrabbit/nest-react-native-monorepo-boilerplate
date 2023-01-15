import { zodResolver } from '@hookform/resolvers/zod';
import { CloseIcon, Colors, Header, IconButton, Input, Layout, PrimaryButton, Typography } from '@minion/design-system';
import { RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, View, StyleSheet } from 'react-native';
import { z } from 'zod';

import { RootStackParamList } from '../../navigator/RootStackNavigator';
import {
  hasWhiteSpaceAtBeginOrEnd,
  isAlphabet,
  notAlphabetErrorMessage,
  whiteSpaceAtBeginOrEndErrorMessage,
} from '../../util/validation';

const schema = z.object({
  username: z
    .string()
    .min(1, { message: 'Enter username' })
    .max(20, { message: 'At most 20 characters' })
    .refine(hasWhiteSpaceAtBeginOrEnd, whiteSpaceAtBeginOrEndErrorMessage)
    .refine(isAlphabet, notAlphabetErrorMessage),
});

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUpNameFormScreen'>;
type ScreenRouteProp = RouteProp<RootStackParamList, 'SignUpNameFormScreen'>;

const SignUpNameFormScreen = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const { params } = useRoute<ScreenRouteProp>();
  const isFocused = useIsFocused();

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!isFocused) return;

    setTimeout(() => {
      if (!inputRef.current) return;
      inputRef.current.focus();
    }, 100);
  }, [isFocused]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
    },
  });
  const usernameValue = watch('username');

  const handlePressNext = handleSubmit((data) => {
    navigation.navigate('SignUpEmailFormScreen', {
      ...params,
      username: data.username,
    });
  });

  return (
    <Layout>
      <Header
        headerRight={<IconButton onPress={() => navigation.navigate('WelcomeScreen')} icon={() => <CloseIcon />} />}
      />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={50}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="never" bounces={false}>
          <Typography variant="h6" fontWeight="bold" style={styles.title}>
            Please enter username
          </Typography>
          <Controller
            name="username"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                ref={inputRef}
                value={value}
                onChangeText={(v) => onChange(v)}
                onBlur={onBlur}
                placeholder="username"
                isError={'username' in errors}
                subDesc={errors?.username?.message as string}
              />
            )}
          />
          <View style={styles.flexSpacer} />
          <PrimaryButton label="Next" onPress={handlePressNext} disabled={usernameValue.length === 0} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  title: {
    marginLeft: 6,
    marginBottom: 24,
    color: Colors.GRAY90,
  },
  flexSpacer: {
    flex: 1,
  },
});

export default SignUpNameFormScreen;
