import React, { useEffect } from 'react';
import { Button, Center, Flex, Text, VStack, Image } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Welcome = ({ navigation }) => {
  const checkIfUserExists = async () => {
    try {
      const value = await AsyncStorage.getItem('@userId');
      // it means that the user is already logged inf
      if (value) {
        navigation.navigate('Auth');
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    checkIfUserExists();
  }, []);

  return (
    <Flex flex={1} justifyContent="space-between" padding={10}>
      <Center>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          }}
          alt="Alternate Text"
          size="2xl"
          borderRadius={10}
          mb="10"
        />
        <Text fontSize={'xl'}>Keletron Tennis Academy</Text>
      </Center>
      <VStack space={5} mt={10}>
        <Button size={'lg'} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Button>
        <Button
          size={'lg'}
          variant="link"
          onPress={() => navigation.navigate('LogIn')}
        >
          Log In
        </Button>
      </VStack>
    </Flex>
  );
};
