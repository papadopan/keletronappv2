import React from 'react';
import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  Button,
  Pressable,
  Spinner,
  Switch,
  useColorMode,
  useColorModeValue
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { useGetInfo } from '../../../../hooks/getInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Profile = ({ navigation }) => {
  const { data, isLoading, isError } = useGetInfo();

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('@userId');
      navigation.navigate('WelcomeNavigator', { screen: 'Welcome' });
    } catch (e) {}
  };

  if (isLoading)
    return (
      <Box flex={1} alignItems="center" justifyContent={'center'}>
        <Spinner accessibilityLabel="Loading posts" />
      </Box>
    );

  if (isError)
    return (
      <Box flex={1} alignItems="center" justifyContent={'center'}>
        Error while fetching
      </Box>
    );

  const user = data.getInfo;
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'warmGray.700');
  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');
  const circlebg = useColorModeValue('yellow.100', 'yellow.600');
  const iconbg = useColorModeValue('black', 'white');

  return (
    <Flex
      padding={5}
      paddingTop={15}
      justifyContent="space-between"
      flex={1}
      bg={screenbg}
    >
      <Center>
        <Box bg={circlebg} borderRadius={50} padding="5" mb={8}>
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
          bg={bg}
        >
          <Text>Language</Text>
          <Flex flexDirection={'row'}>
            <Text mr="3">Greek</Text>
            <Icon name="right" size={20} color={iconbg} />
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems={'center'}
          bg={bg}
          padding="5"
          borderRadius="6"
        >
          <Text>Theme</Text>
          <Flex flexDirection={'row'} alignItems="center">
            <Text mr="3">{colorMode === 'light' ? 'Light' : 'Dark'}</Text>
            <Switch
              size="sm"
              isChecked={colorMode === 'light'}
              onToggle={toggleColorMode}
            />
          </Flex>
        </Flex>
        <Pressable
          onPress={() =>
            user.bookings.length > 0
              ? navigation.navigate('PreviewList', { bookings: user.bookings })
              : null
          }
        >
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            backgroundColor="white"
            padding="5"
            bg={bg}
            borderRadius="6"
          >
            <Text>My Bookings</Text>
            <Flex flexDirection={'row'}>
              <Text mr="3">{user.bookings.length}</Text>
              <Icon name="right" size={20} color={iconbg} />
            </Flex>
          </Flex>
        </Pressable>
        <Flex>
          <Button
            onPress={signOut}
            variant="outline"
            leftIcon={<Icon name="logout" size={20} color={iconbg} />}
          >
            Sign out
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
};
