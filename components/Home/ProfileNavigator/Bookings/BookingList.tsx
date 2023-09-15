import React, { useState } from 'react';
import {
  Badge,
  Box,
  Divider,
  FlatList,
  Flex,
  Switch,
  Text,
  useColorModeValue
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { MyDate } from '../../../fragments/Date';
import type { BookingType } from '../../../../types/bookings';
import { useTranslation } from 'react-i18next';
import { useGetAllBookings } from 'hooks';

export const BookingList = ({ navigation }) => {
  const { t } = useTranslation();
  const { data, isError, isLoading, isSuccess } = useGetAllBookings();

  const bg = useColorModeValue('white', 'warmGray.700');
  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');
  const circlebg = useColorModeValue('yellow.100', 'yellow.600');
  const iconbg = useColorModeValue('black', 'white');

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error</Text>;

  const isActiveBooking = (item: BookingType) => {
    const now = new Date().getTime();
    const bookingTime = new Date(
      `${item.date_booking}T${item.time_slot}Z`
    ).getTime();
    const isBookingActive = now - bookingTime < 0;

    return isBookingActive;
  };

  console.log('Data', data.getAllBookings);

  return (
    <Box p={5} flex={1} bg={screenbg}>
      <FlatList
        data={data.getAllBookings}
        renderItem={({ item }: { item: BookingType; index: number }) => (
          <Flex bg={bg} mb={2} p={4} borderRadius={4}>
            <Flex flexDirection="row" justifyContent={'space-between'}>
              <MyDate date={item.date_booking} />
              <Text>{item.time_slot}</Text>
              <Flex flexDirection={'row'} alignItems="center">
                <Badge
                  mr={5}
                  colorScheme={isActiveBooking(item) ? 'success' : 'danger'}
                >
                  {isActiveBooking(item) ? 'active' : 'passed'}
                </Badge>
              </Flex>
            </Flex>
            <Divider my={2} />
            <Box>
              {item.opponents.map(opponent => (
                <Flex
                  key={opponent}
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={3}
                >
                  <Flex flexDirection="row" alignItems="center">
                    <Text>{opponent}</Text>
                  </Flex>
                </Flex>
              ))}
            </Box>
          </Flex>
        )}
      />
    </Box>
  );
};
