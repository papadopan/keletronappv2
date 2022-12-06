export type BookingType = {
  court: string;
  date_booking: string;
  num_players: number;
  opponents: string[];
  time_slot: string;
  userId: number;
  status?: boolean;
};
