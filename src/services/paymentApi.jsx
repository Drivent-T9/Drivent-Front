import api from './api';

export async function processPayment(token, body) {
  const response = await api.post('/payment/process', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: body,
  });
  return response.data;
}