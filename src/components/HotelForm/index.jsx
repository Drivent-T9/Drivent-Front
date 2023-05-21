import styled from 'styled-components';
import RoomsForm from './roomsForm';
import { Button, Typography } from '@material-ui/core';
import useHotel from '../../hooks/api/useHotel';
import HotelContainer from './hotelContainer';
import { useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import NotIncludesHotel from './notIncludeHotel';
import TicketIsntPaid from './ticketIsntPaid'
import useSaveBooking from '../../hooks/api/useSaveBooking';
import { toast } from 'react-toastify';

export default function HotelForm() {
    const { hotels } = useHotel();
    const { saveBooking } = useSaveBooking();
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const { ticket } = useTicket();

    if (!ticket || !ticket?.TicketType.includesHotel) return <NotIncludesHotel />
    if (ticket.status !== "PAID") return <TicketIsntPaid />

    async function bookHotel() {
        try
        {
            await saveBooking({ roomId: selectedRoom });
            toast("Reserva feita com sucesso!");
        } catch (error)
        {
            console.log(error);
        }
    }

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
                selectedRoom ? <Button variant='contained' onClick={bookHotel}>RESERVAR QUARTO</Button> : null
            }

        </>
    )
}

const StyledTypography = styled(Typography)`
    font-family: 'Roboto';
    margin-bottom: 20px!important;
`;