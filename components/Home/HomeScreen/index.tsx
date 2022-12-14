import React from 'react';
import {
  Box,
  Button,
  Divider,
  FlatList,
  Flex,
  Spinner,
  Text,
  useColorModeValue
} from 'native-base';
import Emoji from 'react-native-emoji';
import { MainScreenBookings } from '../../fragmenrs/MainScreenBookings';
import { useGetMyBookings } from '../../../hooks/getMyBookings';

export const HomeScreen = ({ navigation }) => {
  const { data, isLoading } = useGetMyBookings();
  const bg = useColorModeValue('warmGray.200', 'trueGray.800');
  const box = useColorModeValue('light.100', 'trueGray.700');
  const text = useColorModeValue('darkText', 'lightText');

  return (
    <Flex padding="5" bg={bg} flex={1}>
      <Flex flexDirection={'row'} alignItems="center" mb={50}>
        <Text fontSize={'2xl'} mr="3" color={text}>
          Hey Antonios
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
            <Text color={text}>My Bookings</Text>
            <Button
              onPress={() => navigation.navigate('Bookings')}
              isLoading={isLoading}
              size="sm"
            >
              Add
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
