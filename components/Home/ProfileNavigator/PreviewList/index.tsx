import React, { useState } from 'react';
import {
  Badge,
  Box,
  Divider,
  FlatList,
  Flex,
  Switch,
  Text,
  useColorModeValue
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { MyDate } from '../../../fragmenrs/Date';
import type { BookingType } from '../../../../types/bookings';
import type { PreviewListProps } from 'types/navigation';
import { useTranslation } from 'react-i18next';

export const PreviewList = ({ navigation, route }: PreviewListProps) => {
  const { bookings } = route.params;
  const { t } = useTranslation();

  const isActiveBooking = (item: BookingType) => {
    const now = new Date().getTime();
    const bookingTime = new Date(
      `${item.date_booking}T${item.time_slot}Z`
    ).getTime();
    const isBookingActive = now - bookingTime < 0;

    return isBookingActive;
  };

  const sortTime = (a: BookingType, b: BookingType) => {
    return (
      new Date(`${b.date_booking}T${b.time_slot}Z`).getTime() -
      new Date(`${a.date_booking}T${a.time_slot}Z`).getTime()
    );
  };

  // if the route does not contain bookings
  if (!bookings) navigation.navigate('ProfilePage');

  const bg = useColorModeValue('white', 'warmGray.700');
  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');
  const circlebg = useColorModeValue('yellow.100', 'yellow.600');
  const iconbg = useColorModeValue('black', 'white');

  const [validBookings, setValidBookings] = useState(true);

  return (
    <Box p={5} flex={1} bg={screenbg}>
      <Flex
        mb={1}
        bg={bg}
        p={2}
        borderRadius={4}
        justifyContent="space-between"
        alignItems={'center'}
        direction="row"
      >
        <Text>{t('active booking')}</Text>
        <Switch
          size="sm"
          isChecked={validBookings}
          onToggle={setValidBookings}
        />
      </Flex>
      <Divider my={2} />

      <FlatList
        data={bookings
          .sort(sortTime)
          .filter(v =>
            validBookings ? isActiveBooking(v) : !isActiveBooking(v)
          )}
        renderItem={({ item, index }: { item: BookingType; index: number }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Preview', {
                item: {
                  ...item,
                  status: isActiveBooking(item)
                }
              })
            }
            key={index + item.date_booking + item.time_slot}
          >
            <Flex
              bg={bg}
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
                  colorScheme={isActiveBooking(item) ? 'success' : 'danger'}
                >
                  {isActiveBooking(item) ? 'active' : 'non active'}
                </Badge>
                <Icon name="right" color={iconbg} />
              </Flex>
            </Flex>
          </Pressable>
        )}
      />
    </Box>
  );
};
