import React from 'react'
import { Button, Center, Flex, Text, VStack, Image } from 'native-base'

export const Welcome = ({ navigation  }) => {
  return (
    <Flex flex={1} justifyContent="space-between" padding={10}>
        <Center>
          <Text>Keletron Tennis Academy</Text>
          <Image
          source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}}
          alt="Alternate Text"
          size="xl" />
        </Center>
        <VStack space={5} mt={10}>
          <Button size={"lg"} onPress={()=>navigation.navigate("SignUp")}>Sign Up</Button>
          <Button size={"lg"} variant="link" onPress={()=>navigation.navigate("LogIn")}>Log In</Button>
        </VStack>
    </Flex>
  )
}



