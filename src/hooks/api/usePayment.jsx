import useAsync from '../useAsync';
import * as paymentApi from '../../services/paymentApi';
import useToken from '../useToken';

export default function usePayment() {
  const token = useToken();
  const {
    loading: savePaymentLoading,
    error: savePaymentError,
    act: savePayment,
  } = useAsync((data) => paymentApi.processPayment(token, data), false);

  return {
    savePaymentLoading,
    savePaymentError,
    savePayment,
  };
}