import React from 'react'
import { Box, Button, Flex, FormControl, Input, Text } from 'native-base'

export const Booking = ({ route }) => {
  const { booking, date } = route.params
  return (
    <Flex p={5} justifyContent="space-between" flex={1}>
      <Box>
        <Flex flexDirection={'row'} mb={5}>
          <Text fontSize={'lg'}>Booking Time: </Text>
          <Text fontSize={'lg'} fontWeight={700}>
            {booking.time}
          </Text>
        </Flex>
        <Flex flexDirection={'row'} mb={5}>
          <Text fontSize={'lg'}>Booking Date: </Text>
          <Text fontSize={'lg'} fontWeight={700}>
            {date}
          </Text>
        </Flex>
        <Text textAlign={'center'} fontSize="md" mt={8}>
          Players
        </Text>
        <FormControl>
          <FormControl.Label>Name</FormControl.Label>
          <Input
            size={'xl'}
            variant="underlined"
            type="text"
            p={2}
            placeholder="name"
          />
        </FormControl>
      </Box>
      <Button>Book</Button>
    </Flex>
  )
}
