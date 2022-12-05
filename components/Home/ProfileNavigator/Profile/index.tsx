import React from 'react';
import { Box, Center, Flex, Stack, Text, Button, Pressable } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { useGetInfo } from '../../../../hooks/getInfo';

export const Profile = ({ navigation }) => {
  const { data } = useGetInfo(20);

  const user = data?.getInfo;
  return (
    <Flex padding={5} paddingTop={15} justifyContent="space-between" flex={1}>
      <Center>
        <Box backgroundColor="yellow.100" borderRadius={50} padding="5" mb={8}>
          <Text fontSize={'4xl'} fontWeight="bold">
            {user.first_name[0]}
            {user.last_name[0]}
          </Text>
        </Box>
        <Text fontSize={'2xl'} fontWeight="semibold">
          {user.first_name}
        </Text>
        <Text fontSize={'2xl'} fontWeight="semibold">
          {user.last_name}
        </Text>
        <Text fontSize={'md'} fontWeight="hairline">
          {user.email}
        </Text>
      </Center>
      <Stack space={4}>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor="white"
          padding="5"
          borderRadius="6"
        >
          <Text>Language</Text>
          <Flex flexDirection={'row'}>
            <Text mr="3">Greek</Text>
            <Icon name="right" size={20} />
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor="white"
          padding="5"
          borderRadius="6"
        >
          <Text>Theme</Text>
          <Flex flexDirection={'row'}>
            <Text mr="3">Dark</Text>
            <Icon name="right" size={20} />
          </Flex>
        </Flex>
        <Pressable
          onPress={() =>
            navigation.navigate('PreviewList', { bookings: user.bookings })
          }
        >
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            backgroundColor="white"
            padding="5"
            borderRadius="6"
          >
            <Text>My Bookings</Text>
            <Flex flexDirection={'row'}>
              <Text mr="3">{user.bookings.length}</Text>
              <Icon name="right" size={20} />
            </Flex>
          </Flex>
        </Pressable>
        <Flex>
          <Button variant="outline" leftIcon={<Icon name="logout" size={20} />}>
            Sign out
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
};
