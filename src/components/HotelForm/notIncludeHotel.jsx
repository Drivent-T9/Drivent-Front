import styled from 'styled-components';

export default function NotIncludesHotel() {
  return (
    <PageNoHotel>
      <p>Sua modalidade de ingresso não inclui hospedagem</p>
      <p>Prossiga para a escolha de atividades</p>
    </PageNoHotel>
  );
}

const PageNoHotel = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8e8e8e;
`;
