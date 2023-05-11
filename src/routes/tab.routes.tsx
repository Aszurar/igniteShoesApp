import React from 'react';

import { Feather, Ionicons } from '@expo/vector-icons';

import { useTheme } from 'native-base';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Cart } from '../screens/Cart';
import { useCart } from '../hooks/useCart';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  const { cart } = useCart();
  const { colors, sizes } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.gray[800],
        },
      }}>
      <Screen
        name="products"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home-outline" color={color} size={sizes[6]} />
          ),
        }}
      />

      <Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" color={color} size={sizes[6]} />
          ),
          tabBarBadge: cart.length ? cart.length : undefined,
        }}
      />

      <Screen
        name="details"
        component={Details}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
