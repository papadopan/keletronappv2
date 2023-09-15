import React from 'react';
import { Box, Text } from 'native-base';

type Props = {
  date: string;
};

export const MyDate = ({ date }: Props) => {
  return (
    <Box>
      <Text>
        {new Date(date).toLocaleString('el-Gr', {
          day: 'numeric',
          month: 'short',
          weekday: 'short',
        })}
      </Text>
    </Box>
  );
};
