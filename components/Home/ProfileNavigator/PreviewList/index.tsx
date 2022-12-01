import React from 'react';
import { Badge, Box, FlatList, Flex, Text } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { useGetMyBookings } from '../../../../hooks/getMyBookings';

export const PreviewList = ({ navigation }) => {
  const { data, isLoading } = useGetMyBookings();

  const myList = [
    { date: 'Mon 12, 2022', time: '08:00', num: 4, status: 'in active' },
    { date: 'Tue 3, 2022', time: '18:00', num: 4, status: 'active' },
    { date: 'Fri 6, 2022', time: '13:00', num: 2, status: 'active' },
  ];
  return (
    <Box p={5} flex={1}>
      <FlatList
        data={myList}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('Preview')}>
            <Flex
              backgroundColor={'white'}
              mb={6}
              p={4}
              borderRadius={4}
              flexDirection="row"
              justifyContent={'space-between'}
            >
              <Text>{item.date}</Text>
              <Flex flexDirection={'row'} alignItems="center">
                <Badge
                  mr={5}
                  colorScheme={item.status === 'active' ? 'success' : 'danger'}
                >
                  {item.status}
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
