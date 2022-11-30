import React from 'react';
import { Box, Text, FlatList, Flex } from 'native-base';
import { MyDate } from './Date';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';

type Props = {
  items: any[];
  onPress: () => void;
};
export const MainScreenBookings = ({ items, onPress }: Props) => {
  return (
    <Box>
      <FlatList
        horizontal
        data={items}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={onPress}>
              <Box mr={4} p={3} backgroundColor="gray.100" borderRadius={4}>
                <MyDate date={item.date_booking} />
                <Flex
                  flexDirection={'row'}
                  justifyContent="space-between"
                  mt={6}
                >
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
                    <Icon name="calendar" size={16} />
                  </Flex>
                </Flex>
              </Box>
            </Pressable>
          );
        }}
      />
    </Box>
  );
};
