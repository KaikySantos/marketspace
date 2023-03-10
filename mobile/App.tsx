import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import 'react-native-gesture-handler';

import { NativeBaseProvider, StatusBar, View } from 'native-base';
import { THEME } from './src/theme';

import { Loading } from '@components/Loading';

import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}