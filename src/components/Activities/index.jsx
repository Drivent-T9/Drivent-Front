import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';

export default function ActivitiesPage() {
  const { ticket } = useTicket();

  if (ticket === null) return null;

  if (ticket.status === 'RESERVED') {
    return (
      <>
        <Title>Escolha de atividades</Title>
        <Unauthorized>
          Você precisa ter confirmado pagamento antes <br /> de fazer a escolha de atividades
        </Unauthorized>
      </>
    );
  } else {
    if (!ticket?.TicketType.includesHotel) {
      return (
        <>
          <Title>Escolha de atividades</Title>
          <Unauthorized>
            Sua modalidade de ingresso não necessita escolher <br /> atividade. Você terá acesso a todas as atividades.
          </Unauthorized>
        </>
      );
    } else {
      return (
        <>
          <Title>Escolha de atividades</Title>
          <Unauthorized>
            Em breve você poderá escolher suas atividades.
          </Unauthorized>
        </>
      );
    }
  }
}

const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;
`;

const Unauthorized = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8e8e8e;
  height: 90%;
`;
