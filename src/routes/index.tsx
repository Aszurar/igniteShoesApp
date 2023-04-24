import React, { useEffect, useState } from 'react';

import { useTheme } from 'native-base';

import OneSignal, { OSNotification } from 'react-native-onesignal';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { Notification } from '../components/Notification';
import { AppRoutes } from './app.routes';

const linking = {
  prefixes: [
    'com.aszura.igniteshoesapp://',
    'igniteShoesApp://',
    'exp+igniteshoesapp://',
  ],
  config: {
    screens: {
      tabRoutes: {
        path: 'tabRoutes',
        screens: {
          details: {
            path: 'details/:productId',
            parse: {
              productId: (productId: string) => productId,
            },
          },
          products: 'products',
          cart: 'cart',
        },
      },
      notFound: '*',
    },
  },
};

export function Routes() {
  const { colors } = useTheme();
  const [notification, setNotification] = useState<OSNotification>();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  useEffect(() => {
    const unsubscribe = OneSignal;

    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        const response = notificationReceivedEvent.getNotification();
        setNotification(response);
      },
    );

    return () => unsubscribe;
  }, []);

  return (
    <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />
      {notification && (
        <Notification
          data={notification}
          onClose={() => setNotification(undefined)}
        />
      )}
    </NavigationContainer>
  );
}
