import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useUpdateBooking from '../../hooks/api/useUpdateBooking';
import RoomsForm from '../HotelForm/roomsForm';
import { HotelData, HotelImage, HotelName, HotelText, StyledButton } from '../HotelForm/hotelButtonStyles';

export default function ResumeHotelForm({ booking, setBooking }) {
    const { updateBooking } = useUpdateBooking();
    const [updateRoom, setUpdateRoom] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);

    async function updateBookingRoom() {
        try
        {
            await updateBooking({ roomId: selectedRoom }, booking.Room.Hotel.id);
            setBooking();
            toast('Quarto reservado com sucesso!');
            setUpdateRoom(false);
            setSelectedRoom(null);
        } catch (error)
        {
            console.log(error);
        }
    }

    return (
        <>
            <StyledTypography>Você já escolheu seu quarto:</StyledTypography>
            <StyledContainer>
                <StyledButton disabled className='selected-button'>
                    <HotelImage image={booking.Room.Hotel.image} />
                    <HotelName> {booking.Room.Hotel.name} </HotelName>
                    <HotelText>Quarto Reservado</HotelText>
                    <HotelData>
                        {booking.Room.name} {booking.Room.capacity > 1 ? booking.Room.capacity > 2 ? '(Triple)' : '(Double)' : '(Single)'}
                    </HotelData>
                    <br />
                    <HotelText>Pessoas no seu quarto</HotelText>
                    <HotelData>
                        {booking.Room._count.Booking > 1 ? `Você e mais ${booking.Room._count.Booking - 1}` : 'Somente você'}
                    </HotelData>
                </StyledButton>
            </StyledContainer>
            {
                updateRoom ? <RoomsForm hotelId={booking.Room.Hotel.id} selectedRoom={selectedRoom} setSelectedRoom={(data) => setSelectedRoom(data)} /> : null
            }
            {
                selectedRoom ?
                    <Button variant='contained' onClick={updateBookingRoom}>RESERVAR QUARTO</Button> :
                    <Button variant='contained' onClick={() => setUpdateRoom(!updateRoom)}>TROCAR DE QUARTO</Button>
            }

        </>
    )
}

const StyledTypography = styled(Typography)`
    font-family: 'Roboto';
    margin-top: 16px !important;
    margin-bottom: 14px !important;
    color: #8E8E8E;
`;

const StyledContainer = styled.div`
    margin-bottom: 38px;
`;