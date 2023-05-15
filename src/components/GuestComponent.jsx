import styled from 'styled-components';

export default function Guest() {
    return (
        <Message>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</Message>
    )
}

const Message = styled.div`
    margin: 25%;
    align-items: center;
    color: gray;
    font-size: 20px;
    text-align: center;
`
