import React, { useEffect } from 'react';
import { Box, Button, Divider, Flex, Text } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDeleteBooking } from '../../../../hooks/useDeleteBooking';
import { useQueryClient } from '@tanstack/react-query';

export const Preview = ({ route, navigation }) => {
  const { item } = route.params;

  const { mutate, isLoading, isSuccess } = useDeleteBooking();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('ProfilePage');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    }
  }, [isSuccess]);

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
      <Button
        colorScheme={'danger'}
        isDisabled={!item.status}
        onPress={() => mutate(item.id)}
        isLoading={isLoading}
      >
        Delete
      </Button>
    </Flex>
  );
};
