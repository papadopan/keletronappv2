import { Box, Flex, Input, Text } from 'native-base';
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';

export const ValidatePassword = () => {
  const [first, setFirst] = useState<string>();
  const [second, setSecond] = useState<string>();
  const [third, setThird] = useState<string>();
  const [fourth, setFourth] = useState<string>();
  const [fifth, setFifth] = useState<string>();
  const [sixth, setSixth] = useState<string>();
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);
  const sixthRef = useRef(null);

  useEffect(() => {
    if (first) secondRef?.current.focus();
    if (second) thirdRef?.current.focus();
    if (third) fourthref?.current.focus();
    if (fourth) fifthRef?.current.focus();
    if (fifth) sixthRef?.current.focus();
  }, [first]);

  return (
    <Box p={5}>
      <Flex flexDirection={'row'} justifyContent="space-between">
        <Input
          autoFocus
          keyboardType="number-pad"
          size="xl"
          maxLength={1}
          value={first}
          onChangeText={setFirst}
          width={10}
        />
        <Input
          keyboardType="number-pad"
          size="xl"
          maxLength={1}
          value={second}
          ref={secondRef}
          onChangeText={setSecond}
          width={10}
        />
        <Input
          keyboardType="number-pad"
          size="xl"
          maxLength={1}
          value={third}
          ref={thirdRef}
          onChangeText={setSecond}
          width={10}
        />
        <Input
          keyboardType="number-pad"
          size="xl"
          maxLength={1}
          value={fourth}
          ref={fourthRef}
          onChangeText={setSecond}
          width={10}
        />
        <Input
          keyboardType="number-pad"
          size="xl"
          maxLength={1}
          value={fifth}
          ref={fifthRef}
          onChangeText={setSecond}
          width={10}
        />
        <Input
          keyboardType="number-pad"
          size="xl"
          maxLength={1}
          value={sixth}
          ref={sixthRef}
          onChangeText={setSixth}
          width={10}
        />
      </Flex>
    </Box>
  );
};
