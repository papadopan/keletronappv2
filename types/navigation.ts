import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BookingType } from './bookings';

export type AppNavigator = {
  WelcomeNavigator: undefined;
  Auth: undefined;
};

export type WelcomeScreen = {
  Welcome: undefined;
  LogIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ActivationEmail: undefined;
};

export type AuthScreen = {
  App: undefined;
};

export type RootHomeParamList = {
  Home: undefined;
  Bookings: undefined;
  Profile: undefined;
};

export type BookingParamList = {
  BookingsScreen: undefined;
  Booking: { date: string; booking: { time: string; reservation: string } };
  Preview: { item: BookingType };
};

export type ProfilePage = {
  ProfilePage: undefined;
  Language: undefined;
  Preview: { item: BookingType };
  PreviewList: { bookings: BookingType[] };
};

export type BookingProps = NativeStackScreenProps<BookingParamList, 'Booking'>;
export type PreviewListProps = NativeStackScreenProps<
  ProfilePage,
  'PreviewList'
>;
export type BookingsScreenProps = NativeStackScreenProps<
  BookingParamList,
  'BookingsScreen'
>;

export type HomeScreenProps = NativeStackScreenProps<RootHomeParamList, 'Home'>;
