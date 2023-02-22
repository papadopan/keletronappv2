import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import {
  Alert,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Toast,
  useColorModeValue,
  WarningOutlineIcon
} from 'native-base';
import { ActivationSchema, GetCodeSchema } from '../../../schema/activation';
import { useActivateAccount, useGetActivationCode } from 'hooks';

export const ActivationEmail = ({ navigation }) => {
  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');
  const { isSuccess, mutate, data, isError, error } = useGetActivationCode();
  const {
    isSuccess: isActivated,
    mutate: activate,
    isError: isActivationError,
    error: activationError
  } = useActivateAccount();
  useEffect(() => {
    if (isSuccess) {
      Toast.show({
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
    if (isActivated) {
      Toast.show({
        render: () => (
          <Alert status={'success'}>
            <Flex flexDirection={'row'} alignItems="center">
              <Alert.Icon mr={3} />
              <Box>
                <Text>Your account is now activated</Text>
              </Box>
            </Flex>
          </Alert>
        )
      });

      navigation.navigate('LogIn');
    }
  }, [isSuccess, isActivated]);

  return isSuccess ? (
    <Formik
      initialValues={{
        email: data?.getActivationCode.email,
        code: ''
      }}
      onSubmit={v => activate(v)}
      validationSchema={ActivationSchema}
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
            </Box>
          </Box>
          {isActivationError && (
            <Alert status="error" mt={5}>
              <Flex flexDirection={'row'} alignItems="center">
                <Alert.Icon mr={2} />
                {activationError.response.errors.map(
                  (e: { message: string }) => (
                    <Text>{e.message}</Text>
                  )
                )}
              </Flex>
            </Alert>
          )}
          <Button onPress={() => handleSubmit()} isLoading={false}>
            Activate
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
      validationSchema={GetCodeSchema}
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
              {isError && (
                <Alert status="error" mt={5}>
                  <Flex flexDirection={'row'} alignItems="center">
                    <Alert.Icon mr={2} />
                    {error.response.errors.map((e: { message: string }) => (
                      <Text>{e.message}</Text>
                    ))}
                  </Flex>
                </Alert>
              )}
            </Box>
          </Box>

          <Button onPress={() => handleSubmit()} isLoading={false}>
            Get Code
          </Button>
        </Flex>
      )}
    </Formik>
  );
};
