import styled from 'styled-components';

const Header = styled.h1`
    margin-bottom: 37px;
    font-size: 34px;
    font-weight: 400;
    line-height: 39.84px;
    width: 100%;
    color: black;
`;

const Options = styled.div`
    display: flex;
`;

const Day = styled.button`
    width: 131px;
    height: 37px;
    margin-right: 20px;
    background-color: #E0E0E0;
    box-shadow: 5px rgba(0, 0, 0, 0.25);
    border-color: #EEEEEE;
    border-radius: 6px;
`

const Events = styled.div`
    display: flex;
    margin-top: 35px;
    text-align: center;
    overflow-x: auto;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #7B7B7B;
`

const Box = styled.div`
    margin-top: 8px;
    padding: 10px 14px 10px 9px;
    width: 288px;
    height: 390px;
    border: 1px solid #D7D7D7;
`

const EventButton = styled.button`
    position: relative;
    text-align: left;
    padding: 12px 10px 12px 10px;
    margin-bottom: 10px;
    width: 265px;
    height: 80px;
    background-color: #F1F1F1;
    border: 1px solid #D7D7D7;
    border-radius: 5px;
`

const EventTitle = styled.h1`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
`

const EventTime = styled.h2`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
`

const Availability = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 0;
    padding: 10px;
    border-left: 1px solid #D7D7D7;

    img {
        width: 20px;
        height: 20px;
    }
`

const Amount = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    margin-top: 5px;
    color: #078632;
`

export {
    Header,
    Options,
    Day,
    Events,
    Container,
    Title,
    Box,
    EventButton,
    EventTitle,
    EventTime,
    Availability,
    Amount
}