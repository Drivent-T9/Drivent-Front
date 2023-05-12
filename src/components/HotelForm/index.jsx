import styled from 'styled-components';
import RoomsForm from './roomsForm';
import { Typography } from '@material-ui/core';
import useHotel from '../../hooks/api/useHotel';

export default function HotelForm() {
    const { hotels } = useHotel();
    // const rooms = [
    //     {
    //         name: 101,
    //         capacity: 3,
    //     },
    //     {
    //         name: 102,
    //         capacity: 3,
    //     },
    //     {
    //         name: 103,
    //         capacity: 3,
    //     },
    //     {
    //         name: 104,
    //         capacity: 3,
    //     },
    //     {
    //         name: 105,
    //         capacity: 1,
    //     },
    //     {
    //         name: 106,
    //         capacity: 2,
    //     },
    //     {
    //         name: 107,
    //         capacity: 2,
    //     },

    // ]
    return (
        <>
            <StyledTypography variant='h4'>Escolha de hotel e quarto</StyledTypography>
            {
                hotels ? <RoomsForm hotelId={hotels[0].id} /> : null
            }

        </>
    )
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;