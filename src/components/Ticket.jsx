import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useEnrollment from '../hooks/api/useEnrollment';
import Guest from './GuestComponent';
import useTicketTypes from '../hooks/api/useTicketTypes';
import { toast } from 'react-toastify';
import useSaveTicket from '../hooks/api/useSaveTicket';

export default function Ticket({setTicketCreated}) {
  const [buttonType, setButtonType] = useState(null);
  const [hotelType, setHotelType] = useState(null);
  const [includesHotel, setIncludesHotel] = useState(null);
  const [remoteOrder, setRemoteOrder] = useState(null);
  const { enrollment } = useEnrollment();
  const [value, setValue] = useState(0);
  const [presencialOrder, setPresencialOrder] = useState(null);
  const { ticketTypes } = useTicketTypes();
  const [ticket, setTicket] = useState(null);
  const { saveTicket } = useSaveTicket();

  useEffect(() => {
    if (ticketTypes) {
      if (remoteOrder === true) {
        //online
        setTicket(ticketTypes.filter((t) => t.isRemote === true));
      }

      if (includesHotel === true) {
        //presencial com hotel
        setTicket(ticketTypes.filter((t) => t.includesHotel === true));
      }

      if (remoteOrder === false && includesHotel === false) {
        //presencial sem hotel
        setTicket(ticketTypes.filter((t) => t.isRemote === false && t.includesHotel === false));
      }
    }

  },[remoteOrder, includesHotel])

  async function createTicket() {
    const data = {
      ticketTypeId: ticket[0].id,
    };

    try {
      await saveTicket(data);
      toast('Ticket reservado!');
      setTicketCreated(ticket);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }

  return (
    <>
      <Title>Ingresso e Pagamento</Title>
      {!enrollment ? (
        <Guest />
      ) : (
        <>
          <Subtitle>Primeiro, escolha sua modalidade de ingresso</Subtitle>
          <Options>
            <Button
              buttonType={buttonType === true}
              onClick={() => {
                setButtonType(true);
                setRemoteOrder(false);
                setValue(250);
              }}
            >
              <span>Presencial</span>
              <p>R$ 250</p>
            </Button>

            <Button
              buttonType={buttonType === false}
              onClick={() => {
                setButtonType(false);
                setIncludesHotel(false);
                setRemoteOrder(true);
                setValue(100);
                setPresencialOrder(false);
              }}
            >
              <span>Online</span>
              <p>R$ 100</p>
            </Button>
          </Options>

          {remoteOrder ? (
            <>
              <Subtitle>Fechado! O total ficou em R${value}. Agora é só confirmar:</Subtitle>
              <FinishTicket
                onClick={createTicket}
              >
                RESERVAR INGRESSO
              </FinishTicket>
            </>
          ) : (
            <></>
          )}

          {remoteOrder === false ? (
            <>
              <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
              <Options>
                <Button
                  hotelType={hotelType === true}
                  onClick={() => {
                    setHotelType(true);
                    setValue(250);
                    setPresencialOrder(true);
                    setIncludesHotel(false);
                  }}
                >
                  <span>Sem Hotel</span>
                  <p>+ R$ 0</p>
                </Button>

                <Button
                  hotelType={hotelType === false}
                  onClick={() => {
                    setHotelType(false);
                    setValue(600);
                    setPresencialOrder(true);
                    setIncludesHotel(true);
                  }}
                >
                  <span>Com Hotel</span>
                  <p>+ R$ 350</p>
                </Button>
              </Options>
            </>
          ) : (
            <></>
          )}

          {presencialOrder ? (
            <>
              <Subtitle>Fechado! O total ficou em R${value}. Agora é só confirmar:</Subtitle>
              <FinishTicket
                onClick={createTicket}
              >
                RESERVAR INGRESSO
              </FinishTicket>
            </>
          ) : (
            <></>
          )}
        </>
      )}

    </>
  );
}

const Title = styled.h1`
  font-size: 34px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 39.84px;
  width: 100%;
  color: black;
`;

const Subtitle = styled.h2`
  margin: 15px 0 10px 0;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 39.84px;
  width: 100%;
  color: gray;
`;

const Options = styled.div`
  display: flex;
  margin-bottom: 40px;
  width: 37%;
  justify-content: space-between;
`;

const Button = styled.button`
  box-sizing: border-box;
  height: 145px;
  width: 145px;
  background-color: ${({ buttonType, hotelType }) => (buttonType || hotelType ? '#FFEED2' : '#FFFFFF')};
  border: 1px solid #cecece;
  border-radius: 20px;

  :hover {
    cursor: pointer;
  }
`;

const FinishTicket = styled.button`
  width: 162px;
  height: 37px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
`;
