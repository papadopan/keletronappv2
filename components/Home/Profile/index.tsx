import React from 'react'
import { Box, Center, Flex, Stack, Text, Button } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'

export const Profile = () => {
  return (
    <Flex padding={5} paddingTop={15} justifyContent="space-between" flex={1}>
      <Center>
        <Box backgroundColor="yellow.100" borderRadius={50} padding="5" mb={8}>
          <Text fontSize={'4xl'} fontWeight="bold">
            AP
          </Text>
        </Box>
        <Text fontSize={'2xl'} fontWeight="semibold">
          Antonios
        </Text>
        <Text fontSize={'2xl'} fontWeight="semibold">
          Papadopoulos
        </Text>
        <Text fontSize={'md'} fontWeight="hairline">
          antonios.papadopan@gmail.com
        </Text>
      </Center>
      <Stack space={4}>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor="cyan.50"
          padding="5"
          borderRadius="6"
        >
          <Text>Language</Text>
          <Flex flexDirection={'row'}>
            <Text mr="3">Greek</Text>
            <Icon name="right" size={20} />
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor="cyan.50"
          padding="5"
          borderRadius="6"
        >
          <Text>Theme</Text>
          <Flex flexDirection={'row'}>
            <Text mr="3">Dark</Text>
            <Icon name="right" size={20} />
          </Flex>
        </Flex>
        <Flex>
          <Button variant="outline" leftIcon={<Icon name="logout" size={20} />}>
            Sign out
          </Button>
        </Flex>
      </Stack>
    </Flex>
  )
}
