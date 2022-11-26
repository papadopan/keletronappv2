import React from 'react';
import { Flex, Input, Text } from 'native-base';

export const ForgotPassword = () => {
  return (
    <Flex p={5}>
      <Text fontSize={'xl'} letterSpacing="lg" textAlign={'center'}>
        Give your email to provide a new password
      </Text>
    </Flex>
  );
};
