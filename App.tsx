import 'react-native-gesture-handler';
import { useEffect } from 'react';

import { NativeBaseProvider } from 'native-base';

import OneSignal from 'react-native-onesignal';
import { StatusBar } from 'react-native';

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';
import { Routes } from './src/routes';
import { CartContextProvider } from './src/contexts/CartContext';
import { Loading } from './src/components/Loading';

const { ONE_SIGNAL_ID } = process.env;

console.log('ONE_SIGNAL_ID', ONE_SIGNAL_ID);

OneSignal.setAppId(ONE_SIGNAL_ID!);

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  useEffect(() => {
    const unsubscribe = OneSignal.setNotificationOpenedHandler(response => {
      console.log(response);
      const { actionId } = response.action as any;
      switch (actionId) {
        case '1':
          return console.log('Ver todas');
        case '2':
          return console.log('Ver pedido');
        default:
          return console.log('Não foi clicado em botão de ação');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
