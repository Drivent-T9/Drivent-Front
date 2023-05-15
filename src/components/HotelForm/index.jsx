import styled from 'styled-components';
import RoomsForm from './roomsForm';
import { Button, Typography } from '@material-ui/core';
import useHotel from '../../hooks/api/useHotel';
import HotelContainer from './hotelContainer';
import { useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import NotIncludesHotel from './notIncludeHotel';
import usePayment from '../../hooks/api/usePayment';
import TicketIsntPaid from './ticketIsntPaid'

export default function HotelForm() {
    const { hotels } = useHotel();
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const { ticket } = useTicket();
    const payment = usePayment();

    if (!ticket || !ticket?.TicketType.includesHotel) return <NotIncludesHotel />
    if (ticket.status !== "PAID") return <TicketIsntPaid />

    return (
        <>
            <StyledTypography variant='h4'>Escolha de hotel e quarto</StyledTypography>
            {
                hotels ? <HotelContainer hotels={hotels} selectedHotel={selectedHotel} setSelectedHotel={(data) => setSelectedHotel(data)} /> : null
            }
            {
                selectedHotel ? <RoomsForm hotelId={selectedHotel} selectedRoom={selectedRoom} setSelectedRoom={(data) => setSelectedRoom(data)} /> : null
            }
            {
                selectedRoom ? <Button variant='contained' onClick={() => { setSelectedHotel(null); setSelectedRoom(null); }}>RESERVAR QUARTO</Button> : null
            }

        </>
    )
}

const StyledTypography = styled(Typography)`
    font-family: 'Roboto';
    margin-bottom: 20px!important;
`;