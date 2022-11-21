import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, Input, Stack, WarningOutlineIcon } from 'native-base'

export const Login = () => {

  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  return (
    <Flex flex={1} justifyContent="space-between" padding={5}>
      <Stack>
        <FormControl isRequired mb={10}>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Email</FormControl.Label>
              <Input size={"xl"} variant="underlined" type="text" p={2}
                value={email}
                onChangeText={setEmail}
              placeholder="john@doe.com" />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input size={"xl"} variant="underlined" type='password'
                value={pwd}
                onChangeText={setPwd}
              p={2} placeholder="Password"/>
              <FormControl.HelperText>
                Must be atleast 6 characters.
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </Stack>
        </FormControl>
        <Stack space={2}>
          <Button variant="link">Forgot Password?</Button>
          <Button variant="link">Resend Activation email</Button>
        </Stack>
      </Stack>
      <Box>
        <Button>Log In</Button>
      </Box>
    </Flex>
  )
}



