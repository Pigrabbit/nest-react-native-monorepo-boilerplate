import { zodResolver } from '@hookform/resolvers/zod';
import { CloseIcon, Colors, Header, IconButton, Input, Layout, PrimaryButton, Typography } from '@minion/design-system';
import { RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, View, StyleSheet, Alert } from 'react-native';
import { z } from 'zod';

import { postUser } from '../../api/user';
import { RootStackParamList } from '../../navigator/RootStackNavigator';
import {
  hasWhiteSpaceAtBeginOrEnd,
  isEmail,
  notEmailErrorMessage,
  whiteSpaceAtBeginOrEndErrorMessage,
} from '../../util/validation';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Enter email' })
    .max(50, { message: 'At most 50 characters' })
    .refine(hasWhiteSpaceAtBeginOrEnd, whiteSpaceAtBeginOrEndErrorMessage)
    .refine(isEmail, notEmailErrorMessage),
});

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUpEmailFormScreen'>;
type ScreenRouteProp = RouteProp<RootStackParamList, 'SignUpEmailFormScreen'>;

const SignUpEmailFormScreen = () => {
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
      email: '',
    },
  });
  const emailValue = watch('email');

  const handlePressNext = handleSubmit((data) => {
    postUser({ email: data.email, ...params })
      .then(() => {
        navigation.navigate('SignUpCompletedScreen');
      })
      .catch((error) => Alert.alert('', error, [{ text: 'close' }]));
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
            Please enter email
          </Typography>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                ref={inputRef}
                value={value}
                onChangeText={(v) => onChange(v)}
                onBlur={onBlur}
                placeholder="email"
                isError={'email' in errors}
                subDesc={errors?.email?.message as string}
              />
            )}
          />
          <View style={styles.flexSpacer} />
          <PrimaryButton label="Done" onPress={handlePressNext} disabled={emailValue.length === 0} />
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

export default SignUpEmailFormScreen;
