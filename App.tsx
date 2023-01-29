import { StatusBar } from 'expo-status-bar';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { NativeBaseProvider } from 'native-base';
import { THEME } from 'src/theme';

import { Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}