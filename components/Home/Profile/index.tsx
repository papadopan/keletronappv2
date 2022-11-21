import React from 'react'
import { Box , Center, Flex, Stack, Text, Icon} from 'native-base'

export const Profile = () => {
  return (
    <Flex padding={5} paddingTop={15} justifyContent="space-between" flex={1}>
      <Center>
        <Box  backgroundColor="yellow.100"  borderRadius={50} padding="5" mb={8}>
          <Text fontSize={"4xl"} fontWeight="bold">AP</Text>
        </Box>
          <Text fontSize={"2xl"} fontWeight="semibold">Antonios</Text>
          <Text fontSize={"2xl"} fontWeight="semibold">Papadopoulos</Text>
          <Text fontSize={"md"} fontWeight="hairline">antonios.papadopan@gmail.com</Text>
      </Center>
      <Stack>
        <Flex>         <Icon name="home" />
Language</Flex>
      </Stack>
    </Flex>
  )
}



