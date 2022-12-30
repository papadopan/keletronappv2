import React, { useEffect, useRef } from 'react';
import { Box, Button, Flex, FormControl, Input, Text } from 'native-base';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/AntDesign';
import { BookingProps } from '../../../../types/navigation';
import { useAddBooking } from '../../../../hooks/addBooking';
import { useQueryClient } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Booking = ({ route, navigation }: BookingProps) => {
  const formikRef = useRef(null);
  const queryClient = useQueryClient();
  const removeUserFromList = (
    players: { name: string }[],
    indexToDelete: number
  ) => players.filter((_, index: number) => index !== indexToDelete);
  const addNewUser = () => ({
    name: '',
  });

  const { booking, date } = route.params;
  const { mutate, isSuccess, isError, data } = useAddBooking();

  useEffect(() => {
    if (isSuccess && data) {
      queryClient.invalidateQueries({
        queryKey: ['myBookings'],
      });
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
      queryClient.invalidateQueries({
        queryKey: ['bookings', data.addBooking.date_booking],
      });
      navigation.navigate('Preview', {
        item: data.addBooking,
      });
    }
  }, [isSuccess, isError]);

  const getUsersId = async () => {
    try {
      return await AsyncStorage.getItem('@userId');
    } catch (e) {}
  };

  const handleBooking = async (v: { players: { name: string }[] }) => {
    const userId = await getUsersId();
    mutate({
      time_slot: booking.time,
      date_booking: date,
      userId: Number(userId),
      opponents: v.players.map((player: { name: string }) => player.name),
      num_players: v.players.length + 1,
      court: 'court1',
    });
  };
  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        players: [
          {
            name: '',
          },
        ],
      }}
      onSubmit={v => handleBooking(v)}
    >
      {({ handleChange, values, setFieldValue, handleSubmit }) => (
        <Flex p={5} justifyContent="space-between" flex={1}>
          <Box>
            <Flex flexDirection={'row'} justifyContent="space-between">
              <Flex mb={5}>
                <Text fontSize={'lg'} fontWeight={700}>
                  {booking.time}
                </Text>
                <Text fontSize={'sm'}>Booking Time</Text>
              </Flex>
              <Flex mb={5}>
                <Text fontSize={'lg'} fontWeight={700}>
                  {date}
                </Text>
                <Text fontSize={'sm'} textAlign="right">
                  Booking Date
                </Text>
              </Flex>
            </Flex>
            <Text textAlign={'center'} fontSize="xl" mb={8} letterSpacing="xl">
              Players
            </Text>
            <Box p={4} backgroundColor="white" borderRadius={6}>
              {values.players.map((player, index) => (
                <Flex key={index} mb={3}>
                  <FormControl mb={4}>
                    <FormControl.Label>Player {index + 1}</FormControl.Label>
                    <Input
                      size={'xl'}
                      variant="underlined"
                      type="text"
                      onChangeText={handleChange(`players[${index}].name`)}
                      p={2}
                      placeholder="John Doe"
                      value={values.players[index].name}
                      InputRightElement={
                        <Icon
                          name="delete"
                          size={18}
                          onPress={() =>
                            values.players.length > 1 &&
                            setFieldValue(
                              'players',
                              removeUserFromList(values.players, index)
                            )
                          }
                        />
                      }
                    />
                  </FormControl>
                </Flex>
              ))}
              {values.players.length < 3 && (
                <Box my={5}>
                  <Button
                    onPress={() =>
                      setFieldValue('players', [
                        ...values.players,
                        addNewUser(),
                      ])
                    }
                  >
                    add player
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
          <Button onPress={() => handleSubmit()}>Book</Button>
        </Flex>
      )}
    </Formik>
  );
};
