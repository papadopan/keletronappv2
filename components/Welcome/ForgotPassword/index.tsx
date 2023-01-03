import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  useToast,
  WarningOutlineIcon,
  Alert,
  useColorModeValue
} from 'native-base';
import { Formik } from 'formik';
import {
  ForgotPasswordSchema,
  ForgotWithCodeSchema
} from '../../../schema/forgotPassword';
import { useAddForgotPassword } from '../../../hooks/useAddForgotPassword';
import { useUpdateForgottenPassword } from '../../../hooks/useUpdateForgottenPassword';

export const ForgotPassword = ({ navigation }) => {
  const { mutate, isSuccess, data } = useAddForgotPassword();
  const {
    mutate: update,
    data: updatedData,
    isSuccess: isDataUpdated
  } = useUpdateForgottenPassword();
  const [hasAlreadyPassword, setHasAlreadyPassword] = useState(false);
  const [email, setEmail] = useState(data?.forgotPassword.email);
  const toast = useToast();
  useEffect(() => {
    if (isSuccess) {
      toast.show({
        render: () => (
          <Alert status={'info'}>
            <Flex flexDirection={'row'} alignItems="center">
              <Alert.Icon mr={3} />
              <Box>
                <Text>You will receive a code in your email</Text>
                <Text>Code Will be valid for 30 minutes</Text>
              </Box>
            </Flex>
          </Alert>
        )
      });
    }
    if (isDataUpdated) {
      toast.show({
        render: () => (
          <Alert status={'success'}>
            <Flex flexDirection={'row'} alignItems="center">
              <Alert.Icon mr={3} />
              <Text>Your password has been updated</Text>
            </Flex>
          </Alert>
        )
      });

      navigation.navigate('LogIn');
    }
  }, [isSuccess, isDataUpdated]);

  const bg = useColorModeValue('white', 'warmGray.700');
  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');
  const circlebg = useColorModeValue('yellow.100', 'yellow.600');
  const iconbg = useColorModeValue('black', 'white');

  return isSuccess || hasAlreadyPassword ? (
    <Formik
      initialValues={{
        email: email,
        code: '',
        password: ''
      }}
      onSubmit={v => update(v)}
      validationSchema={ForgotWithCodeSchema}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <Flex justifyContent="space-between" p={5} flex={1} bg={screenbg}>
          <Box>
            <Box>
              <FormControl
                isRequired
                mb={4}
                isInvalid={
                  errors.email && values.email.length > 0 ? true : undefined
                }
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
              <FormControl isRequired mb={4}>
                <FormControl.Label>Code</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  type="text"
                  p={2}
                  value={values.code}
                  onChangeText={handleChange('code')}
                  placeholder="123456"
                  keyboardType="number-pad"
                  maxLength={7}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.code}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  size={'xl'}
                  variant="underlined"
                  type="password"
                  p={2}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeholder="Password"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>
            </Box>
          </Box>
          <Button onPress={() => handleSubmit()} isLoading={false}>
            Update Password
          </Button>
        </Flex>
      )}
    </Formik>
  ) : (
    <Formik
      initialValues={{
        email: ''
      }}
      onSubmit={v => mutate(v.email)}
      validationSchema={ForgotPasswordSchema}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <Flex justifyContent="space-between" p={5} flex={1} bg={screenbg}>
          <Box>
            <Box>
              <FormControl
                isRequired
                mb={4}
                isInvalid={
                  errors.email && values.email.length > 0 ? true : undefined
                }
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
            </Box>
          </Box>
          <Flex>
            <Button
              mb={6}
              variant="link"
              onPress={() => setHasAlreadyPassword(true)}
            >
              I already have code
            </Button>
            <Button onPress={() => handleSubmit()} isLoading={false}>
              Get my code
            </Button>
          </Flex>
        </Flex>
      )}
    </Formik>
  );
};
