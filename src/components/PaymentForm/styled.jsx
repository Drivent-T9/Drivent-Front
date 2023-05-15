import styled from "styled-components";

const Pagamento=styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8E8E8E;
  margin-bottom: 20px;
`;

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

export {Pagamento, Title, BySide, Form, Example, InputContainer, BigInput, MediumInput, MiniInput, Submit, Check, Confirmed};
