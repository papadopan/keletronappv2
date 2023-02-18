import React, { useEffect } from 'react';
import {
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Toast,
  useColorModeValue
} from 'native-base';
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
      Toast.show({
        render: () => (
          <Alert status={'success'}>
            <Flex flexDirection={'row'} alignItems="center">
              <Alert.Icon mr={3} />
              <Box>
                <Text>Η κράτηση σας διεγράφη επιτυχώς</Text>
              </Box>
            </Flex>
          </Alert>
        )
      });
    }
  }, [isSuccess]);
  const bg = useColorModeValue('white', 'warmGray.700');
  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');
  const iconbg = useColorModeValue('black', 'white');
  return (
    <Flex p={5} justifyContent="space-between" flex={1} bg={screenbg}>
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
        <Box p={4} bg={bg} borderRadius={6}>
          {item.opponents.map((user, index) => (
            <Flex mb={2} p={2} key={user + index}>
              <Flex flexDirection={'row'} alignItems="center">
                <Icon name="user" color={iconbg} />
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
