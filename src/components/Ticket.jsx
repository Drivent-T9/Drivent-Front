import { useState } from 'react';
import styled from 'styled-components';
import useEnrollment from '../hooks/api/useEnrollment';
import Guest from './GuestComponent';

export default function Ticket() {
  const [buttonType, setButtonType] = useState(null)
  const [hotelType, setHotelType] = useState(null)
  const [mode, setMode] = useState(null);
  const { enrollment } = useEnrollment();

  return (
    <>    
    <Title>Ingresso e Pagamento</Title>
      {!enrollment ? <Guest /> : 
      <>
      <Subtitle>Primeiro, escolha sua modalidade de ingresso</Subtitle>
        <Options>
          <Button
            buttonType={buttonType === true}
            onClick={() => {
              setButtonType(true)
              setMode(true)
            }}
          >
            <span>Presencial</span>
            <p>R$ 250</p>
          </Button>

          <Button
            buttonType={buttonType === false}
            onClick={() => {
              setButtonType(false)
              setMode(false)
            }}
          >
            <span>Online</span>
            <p>R$ 100</p>
          </Button>
        </Options>

      {mode ?
        <>
          <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
          <Options>
            <Button
              hotelType={hotelType === true}
              onClick={() => {
                setHotelType(true)
              }}
            >
              <span>Sem Hotel</span>
              <p>+ R$ 0</p>
            </Button>

            <Button
              hotelType={hotelType === false}
              onClick={() => {
                setHotelType(false)
              }}
            >
              <span>Online</span>
              <p>+ R$ 350</p>
            </Button>
          </Options>
        </>
      : 
        <></>}      
      </>
      }

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
`

const Subtitle = styled.h2`
  margin: 15px 0 10px 0;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 39.84px;
  width: 100%;
  color: gray;
`

const Options = styled.div`
  display: flex;
  margin-bottom: 40px;
  width: 37%;
  justify-content: space-between;
`

const Button = styled.button`
  box-sizing: border-box;
  height: 145px;
  width: 145px;
  background-color: ${({ buttonType, hotelType }) => buttonType || hotelType ? '#FFEED2' : '#FFFFFF'};
  border: 1px solid #CECECE;
  border-radius: 20px;

  :hover {
    cursor: pointer;
  }
`