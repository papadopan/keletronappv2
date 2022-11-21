
import React from 'react'
import { Button, FlatList, Flex, Text } from 'native-base'
import Emoji from 'react-native-emoji';

export const HomeScreen = () => {
  return (
    <Flex padding="5">
      <Flex flexDirection={"row"} alignItems="center" mb={50}>
        <Text fontSize={"2xl"} mr="3">Hey Antonios</Text>
        <Emoji name="smiley" style={{fontSize: 30}} />
      </Flex>
      <Flex flexDirection={"row"} justifyContent="space-between" alignItems={"center"}>
        <Text>Your Bookings</Text>
        <Button>Add</Button>
      </Flex>
    </Flex>
  )
}



