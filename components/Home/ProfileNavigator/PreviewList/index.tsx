import React from 'react';
import { Badge, Box, FlatList, Flex, Text } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { useGetMyBookings } from '../../../../hooks/getMyBookings';

export const PreviewList = ({ navigation }) => {
  const { data, isLoading } = useGetMyBookings();

  return (
    <Box p={5} flex={1}>
      <FlatList
        data={data?.getMyBookings}
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
              <Text>{item.date_booking}</Text>
              <Text>{item.time_slot}</Text>
              <Flex flexDirection={'row'} alignItems="center">
                <Badge
                  mr={5}
                  colorScheme={
                    item.date_booking < '2022-12-2' ? 'success' : 'danger'
                  }
                >
                  active
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
