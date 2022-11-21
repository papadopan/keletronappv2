import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, Input, Stack, WarningOutlineIcon } from 'native-base'


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX=  /^[A-Za-z]\w{7,14}$/;
export const SignUp = () => {

  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")

  const shouldBeEnabled = () =>{
    return !!first && !!last && !!email && !!pwd
  }

  return (
    <Flex flex={1} justifyContent="space-between" padding={5}>
      <FormControl isRequired>
        <Stack space={5}>
          <Stack>
            <FormControl.Label>First Name</FormControl.Label>
            <Input size={"xl"} variant="underlined" p={2} placeholder="John" onChangeText={setFirst}  value={first}/>
          </Stack>
          <Stack>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input size={"xl"} variant="underlined" p={2} placeholder="Doe" value={last} onChangeText={setLast} />
          </Stack>
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
      <Box>
        <Button isDisabled={!shouldBeEnabled()}>Sign Up</Button>
      </Box>
    </Flex>
)}
