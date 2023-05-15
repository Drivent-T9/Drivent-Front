import styled from 'styled-components';

export default function TicketIsntPaid() {
  return (
    <PageNoHotel>
      <p>Você precisa ter confirmado pagamento antes</p>
      <p>de fazer a escolha de hospedagem</p>
    </PageNoHotel>
  );
}

const PageNoHotel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8e8e8e;
`;
