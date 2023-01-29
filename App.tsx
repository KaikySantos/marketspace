import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Text } from 'react-native';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}