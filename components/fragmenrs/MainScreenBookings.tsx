import React from 'react';
import { Box, Text, FlatList, Flex } from 'native-base';
import { MyDate } from './Date';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  items: any[];
};
export const MainScreenBookings = ({ items }: Props) => {
  return (
    <Box>
      <FlatList
        horizontal
        data={items}
        renderItem={({ item }) => {
          return (
            <Box mr={4} p={3} backgroundColor="gray.100" borderRadius={4}>
              <MyDate date={item.date_booking} />
              <Flex flexDirection={'row'} justifyContent="space-between" mt={4}>
                <Flex flexDirection="row" alignItems="center">
                  <Text mr={1} fontSize="lg">
                    {item.num_players}
                  </Text>
                  <Icon name="user" size={16} />
                </Flex>
                <Flex flexDirection="row" alignItems="center">
                  <Text mr={1} fontSize="lg">
                    {item.time_slot}
                  </Text>
                  <Icon name="dashboard" size={16} />
                </Flex>
              </Flex>
            </Box>
          );
        }}
      />
    </Box>
  );
};
