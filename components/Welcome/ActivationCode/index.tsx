import React, { useEffect } from 'react';
import {
  Button,
  Flex,
  FormControl,
  Input,
  WarningOutlineIcon,
  Alert,
  Text,
  useToast,
  useColorModeValue,
  ScrollView,
  Box
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';

import { useActivateAccount } from 'hooks';
import { ActivationCodeScreenProps } from 'types/navigation';

type Inputs = {
  code: string;
  email: string;
};

export const ActivationCode = ({
  navigation,
  route
}: ActivationCodeScreenProps) => {
  const {
    isSuccess: isActivated,
    mutate: activate,
    isLoading,
    isError
  } = useActivateAccount();

  const { email } = route.params;
  const toast = useToast();
  console.log(email);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  useEffect(() => {
    if (isActivated) {
      toast.show({
        render: () => (
          <Alert status={'success'}>
            <Flex flexDirection={'row'} alignItems="center">
              <Alert.Icon mr={2} />
              <Text>Account activated</Text>
            </Flex>
          </Alert>
        )
      });
      navigation.navigate('LogIn');
    }
  }, [isActivated]);

  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');

  if (isError) {
    return (
      <Box>
        <Text>Something went wrong</Text>
        <Text>Try again there is an error</Text>
      </Box>
    );
  }

  return (
    <ScrollView
      _contentContainerStyle={{
        justifyContent: 'space-between',
        flex: 1
      }}
      padding={5}
      bg={screenbg}
    >
      <Controller
        control={control}
        rules={{ required: 'Το πεδίο είναι υποχρεωτικό' }}
        name="code"
        render={({ field }) => {
          return (
            <FormControl isRequired isInvalid={errors.code ? true : undefined}>
              <FormControl.Label>Code</FormControl.Label>
              <Input
                size={'xl'}
                p={3}
                onChangeText={value => field.onChange(value)}
                value={field.value}
                placeholder="Code"
              />

              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors?.code?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          );
        }}
      />
      <Button
        size={'lg'}
        onPress={handleSubmit(({ code }) => activate({ code, email }))}
        isLoading={isLoading}
      >
        Activate
      </Button>
    </ScrollView>
  );
};
