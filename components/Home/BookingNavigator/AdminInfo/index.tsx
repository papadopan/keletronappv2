import { View } from 'react-native';
import React, { useState } from 'react';
import { Bookings } from '../Bookings';
import { useGetInfo } from 'hooks';
import { Box, useColorModeValue, Text, Button } from 'native-base';
import { useTranslation } from 'react-i18next';

type Props = {
  reservations: Bookings[];
};

const AdminInfo: React.FC<Props> = ({ reservations }) => {
  const { data, isError } = useGetInfo();
  const bg = useColorModeValue('warmGray.200', 'gray.800');
  const text = useColorModeValue('black', 'white');
  const { t } = useTranslation();

  const [visibleData, setVisibleData] = useState<boolean>(false);

  // if there are no reservations return null
  if (reservations.length === 0) return null;

  // if we can not fetch user return null
  if (isError) return null;

  const {
    getInfo: { admin }
  } = data;

  // this component will return data only if user is admin
  if (!admin) return null;

  return (
    <View>
      <Button mb={2} onPress={() => setVisibleData(v => !v)}>{`${
        visibleData ? t('hide') : t('show')
      } ${reservations.length}`}</Button>
      {visibleData &&
        reservations.map((reservation, index) => (
          <Box key={reservation.id} p={2} bg={bg} mb={2} borderRadius="5">
            <Text color={text}>Court {index + 1}</Text>
            <Box pl={5} py={5}>
              {reservation.opponents.map((opponent, index) => (
                <Text color={text} key={opponent + index}>
                  {opponent}
                </Text>
              ))}
            </Box>
          </Box>
        ))}
    </View>
  );
};

export default AdminInfo;
