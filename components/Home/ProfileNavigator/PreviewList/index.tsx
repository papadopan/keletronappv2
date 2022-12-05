import React from 'react';
import { Badge, Box, FlatList, Flex, Text } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { MyDate } from '../../../fragmenrs/Date';

export const PreviewList = ({ navigation, route }) => {
  const { bookings } = route.params;

  // if the route does not contain bookings
  if (!bookings) navigation.navigate('Profile');

  return (
    <Box p={5} flex={1}>
      <FlatList
        data={bookings}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => navigation.navigate('Preview', { item: item })}
            key={index + item.date_booking + item.time_slot}
          >
            <Flex
              backgroundColor={'white'}
              mb={6}
              p={4}
              borderRadius={4}
              flexDirection="row"
              justifyContent={'space-between'}
            >
              <MyDate date={item.date_booking} />
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
