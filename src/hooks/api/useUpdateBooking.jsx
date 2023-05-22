import useAsync from '../useAsync';
import * as bookingApi from '../../services/bookingApi';
import useToken from '../useToken';

export default function useUpdateBooking() {
  const token = useToken();
  const {
    loading: updateBookingLoading,
    error: updateBookingError,
    act: updateBooking,
  } = useAsync((body, params) => bookingApi.updateBooking(token, body, params), false);

  return {
    updateBookingLoading,
    updateBookingError,
    updateBooking,
  };
}
