import useAsync from '../useAsync';
import * as paymentApi from '../../services/paymentApi';
import useToken from '../useToken';

export default function usePayment(body) {
  const token = useToken();
  const response = useAsync(() => paymentApi.processPayment(token, body));

  return response;
}