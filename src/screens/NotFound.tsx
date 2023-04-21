import React from 'react';

import { Button, Center, Text, useTheme } from 'native-base';

import { useNavigation } from '@react-navigation/native';

import LinkBreak from '../assets/link-break.svg';

export function NotFound() {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  return (
    <Center flex={1}>
      <LinkBreak width="180px" height="180px" />
      <Text color="white" fontSize="lg" fontWeight="bold">
        Página não encontrada
      </Text>
      <Text
        color="white"
        textAlign="center"
        paddingTop={2}
        paddingLeft={10}
        paddingRight={10}>
        Verifique se o endereço está correto ou se ainda é possível acessar esse
        endereço.
      </Text>
      <Button
        marginTop={5}
        onPress={() => navigate('tabRoutes')}
        backgroundColor={colors.green[500]}
        borderRadius={7}
        _pressed={{ backgroundColor: colors.green[700] }}>
        Ir para tela inicial
      </Button>
    </Center>
  );
}
