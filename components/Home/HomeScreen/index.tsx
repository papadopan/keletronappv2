import React from 'react';
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
import { MainScreenBookings } from '../../fragmenrs/MainScreenBookings';
import { useGetInfo, useGetMyBookings } from 'hooks';
import { HomeScreenProps } from 'types/navigation';
import { useTranslation } from 'react-i18next';

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { data, isLoading } = useGetMyBookings();
  const { data: user, isSuccess: isUserFetched } = useGetInfo();
  const bg = useColorModeValue('warmGray.200', 'trueGray.800');
  const box = useColorModeValue('light.100', 'trueGray.700');
  const text = useColorModeValue('darkText', 'lightText');
  const { t } = useTranslation();

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
