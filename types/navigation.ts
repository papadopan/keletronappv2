import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootAppParamList = {
  App: undefined;
  Welcome: undefined;
  LogIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ActivationEmail: undefined;
};

export type RootHomeParamList = {
  Home: undefined;
  Bookings: undefined;
  Profile: undefined;
};

export type BookingParamList = {
  BookingsScreen: undefined;
  Booking: { date: string; booking: { time: string; reservation: string } };
};

export type ProfilePage = {
  ProfilePage: undefined;
  Preview: undefined;
  PreviewList: undefined;
};

export type BookingProps = NativeStackScreenProps<BookingParamList, 'Booking'>;
export type BookingsScreenProps = NativeStackScreenProps<
  BookingParamList,
  'BookingsScreen'
>;
