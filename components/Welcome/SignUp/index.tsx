import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Alert,
  Text,
  useToast,
  useColorModeValue,
  ScrollView,
  KeyboardAvoidingView
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { useSignUp } from 'hooks';

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export const SignUp = ({ navigation }) => {
  const { mutate, isLoading, data, isSuccess, isError } = useSignUp();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  useEffect(() => {
    if (isSuccess) {
      toast.show({
        render: () => (
          <Alert status={'success'}>
            <Flex flexDirection={'row'} alignItems="center">
              <Alert.Icon mr={2} />
              <Box>
                <Text>You received a code in your email</Text>
                <Text>Provide the code to activate your account</Text>
              </Box>
            </Flex>
          </Alert>
        )
      });
      navigation.navigate('ActivationCode', { email: data.signup.email });
    }
  }, [isSuccess]);

  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');

  if (isError) {
    return (
      <Box>
        <Text>There is an error, try again</Text>
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
      <KeyboardAvoidingView flex={1}>
        <Stack flex={1} justifyContent={'space-between'}>
          <Stack space={4}>
            <Controller
              control={control}
              rules={{ required: 'Το πεδίο είναι υποχρεωτικό' }}
              name="first_name"
              render={({ field }) => {
                return (
                  <FormControl
                    isRequired
                    isInvalid={errors.first_name ? true : undefined}
                  >
                    <FormControl.Label>Όνομα</FormControl.Label>
                    <Input
                      size={'xl'}
                      p={3}
                      onChangeText={value => field.onChange(value)}
                      value={field.value}
                      placeholder="Όνομα"
                    />

                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      {errors?.first_name?.message}
                    </FormControl.ErrorMessage>
                  </FormControl>
                );
              }}
            />
            <Controller
              control={control}
              rules={{ required: 'Το πεδίο είναι υποχρεωτικό' }}
              name="last_name"
              render={({ field }) => {
                return (
                  <FormControl
                    isRequired
                    isInvalid={errors.last_name ? true : undefined}
                  >
                    <FormControl.Label>Επίθετο</FormControl.Label>
                    <Input
                      size={'2xl'}
                      p={3}
                      onChangeText={value => field.onChange(value)}
                      value={field.value}
                      placeholder="Επίθετο"
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      {errors?.last_name?.message}
                    </FormControl.ErrorMessage>
                  </FormControl>
                );
              }}
            />
            <Controller
              control={control}
              rules={{ required: 'Το πεδίο είναι υποχρεωτικό' }}
              name="email"
              render={({ field }) => {
                return (
                  <FormControl
                    isRequired
                    isInvalid={errors.email ? true : undefined}
                  >
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                      size={'2xl'}
                      p={3}
                      onChangeText={value => field.onChange(value)}
                      value={field.value}
                      placeholder="Email"
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      {errors?.email?.message}
                    </FormControl.ErrorMessage>
                  </FormControl>
                );
              }}
            />
            <Controller
              control={control}
              rules={{ required: 'Το πεδίο είναι υποχρεωτικό', minLength: 6 }}
              name="password"
              render={({ field }) => {
                return (
                  <FormControl
                    isRequired
                    isInvalid={errors.password ? true : undefined}
                  >
                    <FormControl.Label>Password</FormControl.Label>
                    <Input
                      size={'2xl'}
                      p={3}
                      onChangeText={value => field.onChange(value)}
                      value={field.value}
                      placeholder="Password"
                    />
                    <FormControl.HelperText>
                      Τουλάχιστον 6 χαρακτήρες.
                    </FormControl.HelperText>
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      {errors?.password?.message ||
                        'Το πεδίο χρειάζεται τουλάχιστον 6 χαρακτήρες'}
                    </FormControl.ErrorMessage>
                  </FormControl>
                );
              }}
            />
          </Stack>
          <Button
            size={'lg'}
            onPress={handleSubmit(data => mutate(data))}
            isLoading={isLoading}
          >
            SignUp
          </Button>
        </Stack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
