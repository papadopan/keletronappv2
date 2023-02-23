import React, { useEffect } from 'react';
import {
  Alert,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Text,
  Toast,
  useColorModeValue
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDeleteBooking } from 'hooks';
import { useQueryClient } from '@tanstack/react-query';
import { Image } from 'react-native';

type ItemProps = {
  time_slot: string;
  date_booking: string;
  opponents: Array<string>;
  id: number;
  status?: boolean;
};

export const Preview = ({ route, navigation }) => {
  const { item }: { item: ItemProps } = route.params;

  const { mutate, isLoading, isSuccess } = useDeleteBooking();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('ProfilePage');

      queryClient.invalidateQueries({
        queryKey: ['user']
      });
      queryClient.invalidateQueries({
        queryKey: ['bookings']
      });
      queryClient.invalidateQueries({
        queryKey: ['myBookings']
      });

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
            <Text fontSize={'sm'}>Ώρα</Text>
          </Flex>
          <Flex mb={5}>
            <Text fontSize={'lg'} fontWeight={700}>
              {item.date_booking}
            </Text>
            <Text fontSize={'sm'} textAlign="right">
              Ημερομηνία
            </Text>
          </Flex>
        </Flex>
        <Box p={4} bg={bg} borderRadius={6}>
          {item.opponents.filter(Boolean).length > 0 &&
            item.opponents.map(
              (user, index) =>
                user.length > 0 && (
                  <Flex mb={2} p={2} key={user + index}>
                    <Flex flexDirection={'row'} alignItems="center">
                      <Icon name="user" color={iconbg} />
                      <Text ml={4}>{user}</Text>
                    </Flex>
                    <Divider mt={2} />
                  </Flex>
                )
            )}
          <Center>
            <Image
              source={require('assets/success.png')}
              style={{ width: 150, height: 150 }}
            />
            <Text>Καλή διασκέδαση</Text>
          </Center>
        </Box>
      </Box>
      <Button
        colorScheme={'danger'}
        isDisabled={!item.status}
        onPress={() => mutate(item.id)}
        isLoading={isLoading}
      >
        Διαγραφή
      </Button>
    </Flex>
  );
};
