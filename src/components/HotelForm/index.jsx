import styled from 'styled-components';
import RoomsForm from './roomsForm';
import { Button, Typography } from '@material-ui/core';
import useHotel from '../../hooks/api/useHotel';
import HotelContainer from './hotelContainer';
import { useState } from 'react';

export default function HotelForm() {
    const { hotels } = useHotel();
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);

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