import React from 'react';
import { Box, Button, Divider, FlatList, Flex, Text } from 'native-base';
import Emoji from 'react-native-emoji';
import { MainScreenBookings } from '../../fragmenrs/MainScreenBookings';
import { useGetMyBookings } from '../../../hooks/getMyBookings';

export const HomeScreen = ({ navigation }) => {
  const { data, isLoading } = useGetMyBookings();

  return (
    <Flex padding="5">
      <Flex flexDirection={'row'} alignItems="center" mb={50}>
        <Text fontSize={'2xl'} mr="3">
          Hey Antonios
        </Text>
        <Emoji name="smiley" style={{ fontSize: 30 }} />
      </Flex>
      <Box p={2} backgroundColor="white" borderRadius={4}>
        <Box>
          <Flex
            flexDirection={'row'}
            justifyContent="space-between"
            alignItems={'center'}
            borderRadius={4}
          >
            <Text>My Bookings</Text>
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
          <MainScreenBookings
            items={data?.getMyBookings}
            onPress={() =>
              navigation.navigate('Profile', { screen: 'Preview' })
            }
          />
        </Flex>
      </Box>
    </Flex>
  );
};
