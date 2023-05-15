import styled from "styled-components";

const Pagamento=styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  margin-bottom: 37px;
  font-size: 34px;
  font-weight: 400;
  line-height: 39.84px;
  width: 100%;
  color: black;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8E8E8E;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  margin: 15px 0 10px 0;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 39.84px;
  width: 100%;
  color: gray;
`

const Bubble = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 108px;
  background-color: #FFEED2;
  border-radius: 20px;
  margin-bottom: 30px;
`

const TicketInfo = styled.div`
  margin: auto;
`

const TicketDetail = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  color: #454545;
`

const TicketPrice = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  color: #898989;
`

const BySide= styled.div`
  display: flex;
`;

const Form= styled.form`
  margin-left: 20px;
`;

const Example= styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #8E8E8E;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
`;

const BigInput=styled.input`
  padding: 8px;
  color: #8E8E8E;
  border-radius: 5px;
  height: 40px;
  width: 400px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

const MediumInput=styled.input`
  padding: 8px;
  margin-top:20px;
  margin-bottom: 20px;
  color: #8E8E8E;
  border-radius: 5px;
  margin-right: 20px;
  height: 40px;
  width:220px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

const MiniInput=styled.input`
  padding: 8px;
  margin-top:20px;
  margin-bottom: 20px;
  color: #8E8E8E;
  border-radius: 5px;
  height: 40px;
  width: 160px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

const Submit=styled.button`
  width: 182px;
  height: 37px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 40px;
`;

const Check=styled.div`
    color: green;
    font-size: 40px;
    margin-right: 15px;
`;


const Confirmed=styled.div`
    display: flex;
    align-items: center;
`;

export {Pagamento, Header, SubTitle, Bubble, TicketInfo, TicketDetail, TicketPrice, Title, BySide, Form, Example, InputContainer, BigInput, MediumInput, MiniInput, Submit, Check, Confirmed};
