import { useState } from 'react';
import Ticket from '../../../components/Ticket';
import PaymentForm from '../../../components/PaymentForm';
import useTicket from '../../../hooks/api/useTicket';
import { useEffect } from 'react';

export default function Payment() {
  const { ticket } = useTicket();
  const [ticketCreated, setTicketCreated] = useState(false);

  useEffect(async () => {
    try {
      if (ticket !== null) setTicketCreated(true);
    } catch (error) {
      console.log(error);
    }
  }, [ticket]);

  return ticketCreated ? <PaymentForm/> : <Ticket setTicketCreated={(data) => setTicketCreated(data)} />;
};
