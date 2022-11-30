import React from 'react';
import { Box, Button, Divider, Flex, Text } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

export const Preview = () => {
  const opponents = ['Antonios', 'Kostas', 'George'];
  return (
    <Flex p={5} justifyContent="space-between" flex={1}>
      <Box>
        <Flex flexDirection={'row'} justifyContent="space-between">
          <Flex mb={5}>
            <Text fontSize={'lg'} fontWeight={700}>
              08:00
            </Text>
            <Text fontSize={'sm'}>Booking Time</Text>
          </Flex>
          <Flex mb={5}>
            <Text fontSize={'lg'} fontWeight={700}>
              2020-12-12
            </Text>
            <Text fontSize={'sm'} textAlign="right">
              Booking Date
            </Text>
          </Flex>
        </Flex>
        <Box p={4} backgroundColor="white" borderRadius={6}>
          {opponents.map(user => (
            <Flex mb={2} p={2}>
              <Flex flexDirection={'row'} alignItems="center">
                <Icon name="user" />
                <Text ml={4}>{user}</Text>
              </Flex>
              <Divider mt={2} />
            </Flex>
          ))}
        </Box>
      </Box>
      <Button colorScheme={'danger'}>Delete</Button>
    </Flex>
  );
};
