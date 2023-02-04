import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { NativeBaseProvider, StatusBar, View } from 'native-base';
import { THEME } from './src/theme';

import { Loading } from '@components/Loading';

// import { Routes } from '@routes/index';
import { MyAds } from '@screens/MyAds';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <MyAds /> : <Loading />}
    </NativeBaseProvider>
  );
}