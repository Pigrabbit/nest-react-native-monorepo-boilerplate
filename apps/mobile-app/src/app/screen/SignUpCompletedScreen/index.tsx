import { CloseIcon, Colors, Header, IconButton, Layout, PrimaryButton, Typography } from '@minion/design-system';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';

import { RootStackParamList } from '../../navigator/RootStackNavigator';

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUpCompletedScreen'>;

const SignUpCompletedScreen = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <Layout>
      <Header
        headerRight={
          <IconButton
            onPress={() => navigation.navigate('WelcomeScreen')}
            icon={() => <CloseIcon width="28" height="28" />}
          />
        }
      />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }} />
        <View style={{ height: 228, backgroundColor: Colors.GRAY30 }} />
        <Typography variant="h6" fontWeight="bold" style={{ textAlign: 'center', marginTop: 20 }}>
          {'Thanks,\nYour account has been created'}
        </Typography>
        <View style={{ flex: 1 }} />
        <PrimaryButton
          label="Login"
          onPress={() => navigation.navigate('WelcomeScreen')}
          style={{ marginHorizontal: 16, marginBottom: 24 }}
        />
      </View>
    </Layout>
  );
};

export default SignUpCompletedScreen;
