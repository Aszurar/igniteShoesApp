import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { NotFound } from '../screens/NotFound';
import { TabRoutes } from './tab.routes';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="tabRoutes" component={TabRoutes} />
      <Screen name="notFound" component={NotFound} />
    </Navigator>
  );
}
