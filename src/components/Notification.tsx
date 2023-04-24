import React from 'react';

import {
  CloseIcon,
  HStack,
  Icon,
  IconButton,
  Pressable,
  Text,
} from 'native-base';

import { OSNotification } from 'react-native-onesignal';
// import * as ExpoLinking from 'expo-linking';

import { Ionicons } from '@expo/vector-icons';

import handleLinkNavigation from '../utils/handleLinkNavigation';

type Props = {
  data: OSNotification;
  onClose: () => void;
};

export function Notification({ data, onClose }: Props) {
  const { launchURL } = data;
  console.log(data);
  function handleNavigateToDetailsProduct() {
    if (launchURL) {
      handleLinkNavigation(launchURL);
      // ExpoLinking.openURL(launchURL);
      onClose();
    }
  }

  return (
    <Pressable
      w="full"
      p={4}
      pt={12}
      bgColor="gray.200"
      position="absolute"
      top={0}
      onPress={handleNavigateToDetailsProduct}>
      <HStack justifyContent="space-between" alignItems="center">
        <Icon
          as={Ionicons}
          name="notifications-outline"
          size={5}
          color="black"
          mr={2}
        />

        <Text fontSize="md" color="black" flex={1}>
          {data.title}
        </Text>

        <IconButton
          variant="unstyled"
          _focus={{ borderWidth: 0 }}
          icon={<CloseIcon size="3" />}
          _icon={{ color: 'coolGray.600' }}
          color="black"
          onPress={onClose}
        />
      </HStack>
    </Pressable>
  );
}
