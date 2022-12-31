import React from 'react';
import { Box, Text, FlatList, Flex, useColorModeValue } from 'native-base';
import { MyDate } from './Date';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import type { BookingType } from '../../types/bookings';

type Props = {
  items: any[];
  onPress: () => void;
};
export const MainScreenBookings = ({ items, onPress }: Props) => {
  const isActiveBooking = (item: BookingType) => {
    const now = new Date().getTime();
    const bookingTime = new Date(
      `${item.date_booking}T${item.time_slot}Z`
    ).getTime();
    const isBookingActive = now - bookingTime < 0;

    return isBookingActive;
  };

  const sortTime = (a: BookingType, b: BookingType) => {
    return (
      new Date(`${a.date_booking}T${a.time_slot}Z`).getTime() -
      new Date(`${b.date_booking}T${b.time_slot}Z`).getTime()
    );
  };

  const bg = useColorModeValue('blue.300', 'warmGray.600');
  const text = useColorModeValue('darkText', 'lightText');
  return (
    <FlatList
      horizontal
      data={items.filter(isActiveBooking).sort(sortTime)}
      renderItem={({ item }) => {
        return (
          <Pressable onPress={onPress}>
            <Box mr={4} p={2} width={150} bg={bg} borderRadius={4}>
              <MyDate date={item.date_booking} />
              <Flex flexDirection={'row'} justifyContent="space-between" mt={6}>
                <Flex flexDirection="row" alignItems="center">
                  <Text mr={1} fontSize="lg" color={text}>
                    {item.num_players}
                  </Text>
                  <Icon name="user" size={16} color={text} />
                </Flex>
                <Flex flexDirection="row" alignItems="center">
                  <Text mr={1} fontSize="lg" color={text}>
                    {item.time_slot}
                  </Text>
                  <Icon name="calendar" size={16} color={text} />
                </Flex>
              </Flex>
            </Box>
          </Pressable>
        );
      }}
    />
  );
};
