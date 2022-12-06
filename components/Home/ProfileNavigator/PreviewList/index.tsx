import React from 'react';
import { Badge, Box, FlatList, Flex, Text } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { MyDate } from '../../../fragmenrs/Date';

export const PreviewList = ({ navigation, route }) => {
  const { bookings } = route.params;

  const now = new Date().getTime();

  const isActiveBooking = item => {
    const now = new Date().getTime();
    const bookingTime = new Date(
      `${item.date_booking}T${item.time_slot}Z`
    ).getTime();
    const isBookingActive = now - bookingTime < 0;

    return isBookingActive;
  };

  const sortTime = (a, b) => {
    return (
      new Date(`${b.date_booking}T${b.time_slot}Z`).getTime() -
      new Date(`${a.date_booking}T${a.time_slot}Z`).getTime()
    );
  };

  // if the route does not contain bookings
  if (!bookings) navigation.navigate('Profile');

  return (
    <Box p={5} flex={1}>
      <FlatList
        data={bookings.sort(sortTime)}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Preview', {
                item: {
                  ...item,
                  status: isActiveBooking(item),
                },
              })
            }
            key={index + item.date_booking + item.time_slot}
          >
            <Flex
              backgroundColor={'white'}
              mb={6}
              p={4}
              borderRadius={4}
              flexDirection="row"
              justifyContent={'space-between'}
            >
              <MyDate date={item.date_booking} />
              <Text>{item.time_slot}</Text>
              <Flex flexDirection={'row'} alignItems="center">
                <Badge
                  mr={5}
                  colorScheme={isActiveBooking(item) ? 'success' : 'danger'}
                >
                  {isActiveBooking(item) ? 'active' : 'non active'}
                </Badge>
                <Icon name="right" />
              </Flex>
            </Flex>
          </Pressable>
        )}
      />
    </Box>
  );
};
