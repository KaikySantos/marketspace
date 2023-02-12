import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { MyAds } from '@screens/MyAds';
import { AdDetails } from '@screens/AdDetails';
import { AdForm } from '@screens/AdForm';
import { AdPreview } from '@screens/AdPreview';
import { MyAdDetails } from '@screens/MyAdDetails';

import { House, SignOut, Tag } from 'phosphor-react-native';

type AppRoutes = {
  home: undefined;
  adDetails: {
    adId: string;
  };
  myAds: undefined;
  myAdDetails: {
    adId: string;
  };
  logout: undefined;
  newAd: undefined;
  adPreview: undefined;
  editAd: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

function LogoutScreen() {
  return null;
} 

export function AppRoutes() {
  const { sizes, colors } = useTheme();
  const iconSize = sizes[7];

  return (
    <Navigator screenOptions={{ 
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.gray[200],
      tabBarInactiveTintColor: colors.gray[400],
      tabBarStyle: {
        backgroundColor: colors.gray[700],
        borderTopWidth: 0,
        height: Platform.OS === "android" ? 'auto' : 96,
        paddingBottom: sizes[9],
        paddingTop: sizes[7]
      }
    }}>
      <Screen 
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} size={iconSize} />
          )
        }}
      />

      <Screen 
        name='myAds'
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => (
            <Tag color={color} size={iconSize} />
          )
        }}
      />

      <Screen 
        name='logout'
        component={LogoutScreen}
        options={{
          tabBarIcon: () => (
            <SignOut color={colors.red[500]} size={iconSize} />
          )
        }}
      />

      <Screen 
        name='adDetails'
        component={AdDetails}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" }
        }}
      />

      <Screen 
        name='newAd'
        component={AdForm}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" }
        }}
      />
      
      <Screen 
        name='adPreview'
        component={AdPreview}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" }
        }}
      />

      <Screen 
        name='editAd'
        component={AdForm}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" }
        }}
      />

      <Screen 
        name='myAdDetails'
        component={MyAdDetails}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" }
        }}
      />
    </Navigator>
  );
}