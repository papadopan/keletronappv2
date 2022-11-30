import React from 'react';
import { Box, Text } from 'native-base';

type Props = {
  date: string;
};

export const MyDate = ({ date }: Props) => {
  return (
    <Box>
      <Text fontSize={'lg'}>
        {new Date(date).toLocaleString('en-GB', {
          day: 'numeric',
          month: 'long',
          weekday: 'long',
        })}
      </Text>
    </Box>
  );
};
