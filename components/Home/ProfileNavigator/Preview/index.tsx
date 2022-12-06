import React from 'react';
import { Box, Button, Divider, Flex, Text } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

export const Preview = ({ route }) => {
  const { item } = route.params;

  const now = new Date().getTime()
  const bookingTime = new Date(`${item.date_booking}T${item.time_slot}Z`).getTime()
  const isBookingActive = now-bookingTime > 0

  return (
    <Flex p={5} justifyContent="space-between" flex={1}>
      <Box>
        <Flex flexDirection={'row'} justifyContent="space-between">
          <Flex mb={5}>
            <Text fontSize={'lg'} fontWeight={700}>
              {item.time_slot}
            </Text>
            <Text fontSize={'sm'}>Booking Time</Text>
          </Flex>
          <Flex mb={5}>
            <Text fontSize={'lg'} fontWeight={700}>
              {item.date_booking}
            </Text>
            <Text fontSize={'sm'} textAlign="right">
              Booking Date
            </Text>
          </Flex>
        </Flex>
        <Box p={4} backgroundColor="white" borderRadius={6}>
          {item.opponents.map((user, index) => (
            <Flex mb={2} p={2} key={user + index}>
              <Flex flexDirection={'row'} alignItems="center">
                <Icon name="user" />
                <Text ml={4}>{user}</Text>
              </Flex>
              <Divider mt={2} />
            </Flex>
          ))}
        </Box>
      </Box>
      <Button colorScheme={'danger'} isDisabled={isBookingActive}>Delete</Button>
    </Flex>
  );
};
