import useAsync from '../useAsync';
import * as bookingApi from '../../services/bookingApi';
import useToken from '../useToken';

export default function useSaveBooking() {
  const token = useToken();
  const {
    loading: saveBookingLoading,
    error: saveBookingError,
    act: saveBooking,
  } = useAsync((data) => bookingApi.createBooking(token, data), false);

  return {
    saveBookingLoading,
    saveBookingError,
    saveBooking,
  };
}