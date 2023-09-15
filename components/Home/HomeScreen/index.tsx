import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Spinner,
  Text,
  useColorModeValue
} from 'native-base';
import Emoji from 'react-native-emoji';
import { MainScreenBookings } from '../../fragments/MainScreenBookings';
import { useGetInfo, useGetMyBookings, useUpdateUser } from 'hooks';
import { HomeScreenProps } from 'types/navigation';
import { useTranslation } from 'react-i18next';
import messaging from '@react-native-firebase/messaging';

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { data, isLoading } = useGetMyBookings();
  const { data: user, isSuccess: isUserFetched } = useGetInfo();
  const { mutate } = useUpdateUser();

  const bg = useColorModeValue('warmGray.200', 'trueGray.800');
  const box = useColorModeValue('light.100', 'trueGray.700');
  const text = useColorModeValue('darkText', 'lightText');
  const { t } = useTranslation();

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    // make sure to update in case the token is not registered in the account
    if (enabled && !user.getInfo?.token_id) {
      const token = await messaging().getToken();
      mutate({
        email: user.getInfo?.email,
        fields: { token_id: token }
      });
    }
  }

  useEffect(() => {
    requestUserPermission();

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage?.data) {
          navigation.navigate('Profile', {
            screen: 'BookingList'
          });
        }
      });
  }, []);

  return (
    <Flex padding="5" bg={bg} flex={1}>
      <Flex flexDirection={'row'} alignItems="center" mb={50}>
        <Text fontSize={'2xl'} mr="3" color={text}>
          {t('hey')} {isUserFetched ? user.getInfo?.first_name : ''}
        </Text>
        <Emoji name="smiley" style={{ fontSize: 30 }} />
      </Flex>
      <Box p={2} bg={box} borderRadius={4}>
        <Box>
          <Flex
            flexDirection={'row'}
            justifyContent="space-between"
            alignItems={'center'}
            borderRadius={4}
          >
            <Text color={text}>{t('My Bookings')}</Text>
            <Button
              onPress={() => navigation.navigate('Bookings')}
              isLoading={isLoading}
              size="sm"
            >
              {t('new booking')}
            </Button>
          </Flex>
          <Divider mt={3} />
        </Box>
        <Flex my={10}>
          {isLoading ? (
            <Spinner />
          ) : (
            <MainScreenBookings
              items={data?.getMyBookings}
              onPress={() => navigation.navigate('Profile')}
            />
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
