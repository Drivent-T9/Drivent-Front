import { useState, useEffect } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import {Pagamento, Header, SubTitle, Bubble, TicketInfo, TicketDetail, TicketPrice, Title, BySide, Form, Example, BigInput, MediumInput, MiniInput, Submit, Check, Confirmed, InputContainer} from './styled';
import usePayment from '../../hooks/api/usePayment';
import { BsCheckCircleFill } from 'react-icons/bs';
import useTicket from '../../hooks/api/useTicket';

export default function PaymentForm() {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });
  const [show, setShow] = useState(true);
  const [issuer, setIssuer] = useState('');
  const { savePayment } = usePayment();

  const { ticket } = useTicket();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (event) => {
    setState((prev) => ({ ...prev, focus: event.target.name }));
  };

  if (ticket === null) return null

  async function OnSubmit(event) {
    event.preventDefault();
    const cardData = {
      issuer: issuer,
      number: state.number,
      name: state.name,
      expiratyonDate: state.expiry,
      cvv: state.cvc
    };
    const paymentBody = {
      ticketId: ticket.id,
      cardData: cardData
    }
    try
    {
      await savePayment(paymentBody);
      setShow(false);
    } catch (error)
    {
      console.log(error);
      alert("Não foi possível realizar o pagamento. Tente novamente mais tarde.");
    }
  }

  if (show === true && ticket.status === "RESERVED")
  {
    return (
      <>
      <Header>Ingresso e Pagamento</Header>
        <Title>Ingresso escolhido</Title>
        <Bubble>

          <TicketInfo>
            <TicketDetail>{ticket.TicketType.name}</TicketDetail>
            <TicketPrice>R$ {ticket.TicketType.price}</TicketPrice>
          </TicketInfo>

        </Bubble>

      <Pagamento>
        <Title>
          Pagamento
        </Title>
        <Form onSubmit={OnSubmit}>
          <BySide>
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
              callback={({ issuer }) => {
                setIssuer(issuer);
              }}
            />

            <InputContainer>
              <BigInput
                required
                type="tel"
                name="number"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <Example>
                E.g.: 49..., 51...,36...,37...
              </Example>
              <BigInput
                required
                type="text"
                name="name"
                placeholder="Name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <MediumInput
                required
                type="{string|number"
                name="expiry"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <MiniInput
                required
                type="tel"
                name="cvc"
                placeholder="CVC"
                pattern="\d{3,4}"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              </InputContainer>
          </BySide>
          <Submit type="submit">
            FINALIZAR PAGAMENTO
          </Submit>
        </Form>
        
      </Pagamento>
    </>
    );
  }
  else
  {
    return (
      <Pagamento>

        <Header>Ingresso e Pagamento</Header>
        <Title>Ingresso escolhido</Title>
        <Bubble>

        <TicketInfo>
          <TicketDetail>{ticket.TicketType.name}</TicketDetail>
          <TicketPrice>R$ {ticket.TicketType.price}</TicketPrice>
        </TicketInfo>

        </Bubble>

        <Title>
          Pagamento
        </Title>

        <BySide>
          <Check>
            <BsCheckCircleFill/>
          </Check>
          <Confirmed>
            Pagamento confirmado!
          </Confirmed>
        </BySide>
      </Pagamento>
    );
  }
}

