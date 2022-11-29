import React from 'react';
import { Box, Text, FlatList } from 'native-base';
type Props = {
  items: number[];
};
export const MainScreenBookings = ({ items }: Props) => {
  return (
    <Box>
      <FlatList
        horizontal
        data={items}
        renderItem={({ item }) => {
          return (
            <Box mx={6} p={2}>
              <Text>{item.date_booking}</Text>
            </Box>
          );
        }}
      />
    </Box>
  );
};
