import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Agenda } from 'react-native-calendars';
import {
  Box,
  Button,
  ScrollView,
  Spinner,
  Text,
  useColorModeValue
} from 'native-base';
import { BookingsScreenProps } from '../../../../types/navigation';
import { useGetBookingsByDate } from '../../../../hooks/getBookingsByDate';
import { useGetSchedule } from '../../../../hooks/getSchedule';
import Icon from 'react-native-vector-icons/AntDesign';
import { useIsFocused } from '@react-navigation/native';

const AVAILABLE_COURTS_FOR_BOOKING = 2;

type Bookings = {
  court?: string;
  date_booking: string;
  id: number;
  num_players: number;
  opponents: string[];
  userId: number;
  time_slot: string;
};

type DAILY_SCHEDULE = {
  time: string;
  reservations: Bookings[];
};

export const Bookings = ({ navigation }: BookingsScreenProps) => {
  const bookings = [
    { time: '08:00', reservations: [] },
    { time: '09:00', reservations: [] },
    { time: '10:00', reservations: [] },
    { time: '11:00', reservations: [] },
    { time: '12:00', reservations: [] },
    { time: '13:00', reservations: [] },
    { time: '14:00', reservations: [] },
    { time: '15:00', reservations: [] },
    { time: '16:00', reservations: [] },
    { time: '17:00', reservations: [] },
    { time: '18:00', reservations: [] },
    { time: '19:00', reservations: [] },
    { time: '20:00', reservations: [] }
  ];
  const today = new Date().toLocaleString('sv-SE', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });
  const [currentDay, setCurrentDay] = useState<string>(today);
  const [currentBookings, setCurrentBookings] =
    useState<DAILY_SCHEDULE[]>(bookings);
  const isFocused = useIsFocused();

  const { data, isFetched, isLoading } = useGetBookingsByDate(currentDay);
  const {
    data: scheduleData,
    isLoading: isScheduleLoading,
    isFetched: isScheduleFetched
  } = useGetSchedule();

  const updateBookingsinAgenda = (
    bkgs: Bookings[],
    daySchedule: DAILY_SCHEDULE[]
  ) => {
    bkgs.map(item => {
      const tim = daySchedule.find(element => element.time === item.time_slot);
      tim?.reservations.push(item);
    });
    setCurrentBookings(daySchedule);
  };

  useEffect(() => {
    if (isFetched && isScheduleFetched && isFocused) {
      const schedule = JSON.parse(scheduleData?.getSchedule.monday);
      updateBookingsinAgenda(data.getBookingsByDate, schedule);
    }
  }, [isFetched, isScheduleFetched, currentDay, isFocused]);

  const bg = useColorModeValue('white', 'warmGray.700');
  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');

  if (isLoading || isScheduleLoading) {
    return (
      <Box
        padding={2}
        flex={1}
        alignItems="center"
        justifyContent={'center'}
        bg={screenbg}
      >
        <Spinner size={'lg'} />
      </Box>
    );
  }

  return (
    <Box padding={2} flex={1} bg={bg}>
      <Agenda
        selected={currentDay}
        loadItemsForMonth={month => {
          console.log('trigger items loading');
        }}
        onCalendarToggled={calendarOpened => {
          console.log(calendarOpened);
        }}
        // Callback that gets called on day press
        onDayPress={day => {
          setCurrentDay(day.dateString);
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={day => {
          console.log('day changed');
        }}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-11-20'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2023-12-12'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={1}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={2}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View />;
        }}
        // Specify how agenda knob should look like
        renderKnob={() => {
          return <Icon name="down" />;
        }}
        // Override inner list with a custom implemented component
        renderList={listProps => {
          return (
            <ScrollView p={2} mt={5} bg={screenbg}>
              {currentBookings.map(booking => (
                <Box key={booking.time} p={4} bg={bg} mb={6} borderRadius="5">
                  <Text
                    fontSize={'3xl'}
                    letterSpacing={'xl'}
                    fontWeight={700}
                    lineHeight="lg"
                    color="gray.300"
                  >
                    {booking.time}
                  </Text>
                  <Text m={2}>
                    {AVAILABLE_COURTS_FOR_BOOKING - booking.reservations.length}{' '}
                    γηπεδα διαθεσιμα
                  </Text>
                  <Button
                    onPress={() =>
                      navigation.navigate('Booking', {
                        booking: booking,
                        date: currentDay
                      })
                    }
                    isDisabled={
                      AVAILABLE_COURTS_FOR_BOOKING -
                        booking.reservations.length ===
                      0
                    }
                  >
                    Booking
                  </Button>
                </Box>
              ))}
            </ScrollView>
          );
        }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return <View />;
        }}
        // Specify your item comparison function for increased performance
        // rowHasChanged={(r1, r2) => {
        //   return r1.text !== r2.text;
        // }}
        // Hide knob button. Default = false
        hideKnob={false}
        // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
        showClosingKnob={true}
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed

        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
        onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Agenda theme
        theme={{
          agendaDayTextColor: 'yellow.100',
          textDayFontFamily: 'Helvetica Neue',
          textMonthFontFamily: 'Helvetica Neue',
          textDayHeaderFontFamily: 'Helvetica Neue',
          textDayFontWeight: '500',
          textMonthFontWeight: '400',
          textDayHeaderFontWeight: '400',
          textDayHeaderFontSize: 16
        }}
        // Agenda container style
        style={{}}
      />
    </Box>
  );
};
