import React, { useRef } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  ScrollView,
  Text,
} from 'native-base';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/AntDesign';
import { BookingProps } from 'types/navigation';

export const Booking = ({ route }: BookingProps) => {
  const formikRef = useRef(null);
  const removeUserFromList = (players, indexToDelete) =>
    players.filter((_, index) => index !== indexToDelete);
  const addNewUser = () => ({
    name: '',
  });

  const { booking, date } = route.params;
  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        players: [
          {
            name: 'antonios',
          },
          {
            name: 'kostas',
          },
        ],
      }}
      onSubmit={() => console.log('-0-')}
    >
      {({ handleChange, values, setFieldValue }) => (
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
                <Flex key={player.name + index} mb={3}>
                  <FormControl mb={4}>
                    <FormControl.Label>Player {index + 1}</FormControl.Label>
                    <Input
                      size={'xl'}
                      variant="underlined"
                      type="text"
                      p={2}
                      placeholder="John Doe"
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
          <Button>Book</Button>
        </Flex>
      )}
    </Formik>
  );
};
