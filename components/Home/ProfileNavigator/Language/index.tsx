import React, { useState } from 'react';
import { Flex, useColorModeValue, Text, Divider, VStack } from 'native-base';
import i18n from '../../../../i18n';
import { Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';

type lang = 'en' | 'el';
type Languages = Array<{
  value: 'Ελληνικά' | 'English';
  lang: lang;
}>;

const LANGUAGES: Languages = [
  { value: 'Ελληνικά', lang: 'el' },
  { value: 'English', lang: 'en' }
];

export const Language = () => {
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const updateLanguage = async (lang: lang) => {
    try {
      await AsyncStorage.setItem('@lang', lang);
      i18n.changeLanguage(lang);
      setCurrentLang(lang);
    } catch (e) {}
  };
  const screenbg = useColorModeValue('warmGray.200', 'trueGray.800');

  return (
    <Flex
      padding={5}
      paddingTop={15}
      justifyContent="space-between"
      flex={1}
      bg={screenbg}
    >
      <VStack divider={<Divider />} space="md">
        {LANGUAGES.map(lang => (
          <Pressable onPress={() => updateLanguage(lang.lang)} key={lang.lang}>
            <Flex
              flexDirection={'row'}
              alignItems="center"
              justifyContent={'space-between'}
            >
              {currentLang === lang.lang ? (
                <>
                  <Text color={'blue.800'}>{lang.value}</Text>
                  <Icon name="check" color={'blue'} />
                </>
              ) : (
                <Text>{lang.value}</Text>
              )}
            </Flex>
          </Pressable>
        ))}
      </VStack>
    </Flex>
  );
};
