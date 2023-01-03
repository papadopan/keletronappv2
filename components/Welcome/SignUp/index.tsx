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
  useColorModeValue
} from 'native-base';
import { Formik } from 'formik';
import { useSignUp } from '../../../hooks/useSignUp';
import { SignupSchema } from '../../../schema/signup';
import { useActivateAccount } from '../../../hooks/useActivateAccount';

export const SignUp = ({ navigation }) => {
  const { mutate, isLoading, error, data, isSuccess, isError } = useSignUp();
  const { isSuccess: isActivated, mutate: activate } = useActivateAccount();
  const toast = useToast();

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
    }
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
  }, [isSuccess, isActivated]);

  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');

  return isSuccess ? (
    <Flex flex={1} justifyContent="space-between" padding={5} bg={screenbg}>
      <Formik
        initialValues={{
          code: '',
          email: data?.signup.email
        }}
        onSubmit={v => activate(v)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Stack space={5} justifyContent="space-between" flex={1}>
            <Box>
              <FormControl isRequired mb={6}>
                <FormControl.Label>Code</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  p={2}
                  placeholder="123456"
                  onChangeText={handleChange('code')}
                  value={values.code}
                  maxLength={7}
                />
              </FormControl>
            </Box>
            <Button onPress={() => handleSubmit()} isLoading={isLoading}>
              Activate Account
            </Button>
          </Stack>
        )}
      </Formik>
    </Flex>
  ) : (
    <Flex flex={1} justifyContent="space-between" padding={5} bg={screenbg}>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: ''
        }}
        onSubmit={v => mutate(v)}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <Stack space={5} justifyContent="space-between" flex={1}>
            <Box>
              <FormControl
                isRequired
                mb={6}
                isInvalid={errors.first_name ? true : undefined}
              >
                <FormControl.Label>First Name</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  p={2}
                  placeholder="John"
                  onChangeText={handleChange('first_name')}
                  value={values.first_name}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.first_name}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                mb={4}
                isInvalid={errors.last_name ? true : undefined}
              >
                <FormControl.Label>Last Name</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  p={2}
                  placeholder="Doe"
                  value={values.last_name}
                  onChangeText={handleChange('last_name')}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.last_name}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                mb={4}
                isInvalid={errors.email ? true : undefined}
              >
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  type="text"
                  p={2}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder="john@doe.com"
                  keyboardType="email-address"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.email}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={errors.password ? true : undefined}
              >
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  type="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  p={2}
                  placeholder="Password"
                />
                <FormControl.HelperText>
                  Must be atleast 6 characters.
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>
              {isError && (
                <Alert mt={4} status="error">
                  <Flex flexDirection={'row'} alignItems="center">
                    <Alert.Icon mr={2} />
                    {error.response.errors.map((e: { message: string }) => (
                      <Text>{e.message}</Text>
                    ))}
                  </Flex>
                </Alert>
              )}
            </Box>
            <Button onPress={() => handleSubmit()} isLoading={isLoading}>
              Sign Up
            </Button>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};
