import { Typography, Button } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import RoomCapacity from "./roomCapacity";
import { useEffect } from "react";
import { useRoom } from "../../hooks/api/useRoom";

export default function RoomsForm({ hotelId }) {
    const { getRooms } = useRoom();
    const [rooms, setRooms] = useState([]);
    const [clickedButton, setClickedButton] = useState(null);

    useEffect(async () => {
        try
        {
            const hotel = await getRooms(hotelId);
            setRooms(hotel.Rooms);
        } catch (error)
        {
            console.log(error);
        }
    }, []);

    if (rooms.length === 0) return null;
    return (
        <>
            <StyledTypography variant="subtitle1">Ótima pedida! Agora escolha seu quarto:</StyledTypography>
            <StyledButtonGrid>
                {
                    rooms.map((r) => {
                        const selected = clickedButton === r.id ? 1 : 0;
                        const available = r.capacity - r._count.Booking - selected;
                        return (
                            <Button key={r.id} variant="outlined" onClick={() => setClickedButton(r.id)} className={clickedButton === r.id ? "selected-button" : ""} disabled={available === 0}>
                                {r.name}
                                <RoomCapacity available={available} occupied={r._count.Booking} selected={selected} />
                            </Button>
                        )
                    })
                }
            </StyledButtonGrid>
        </>
    )
}

const StyledTypography = styled(Typography)`
    margin-top: 52px !important;
    margin-bottom: 30px !important;
    color: #8e8e8e;
`;

const StyledButtonGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 17px;

    button{
        width: 190px;
        height: 45px;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 700;

        justify-content: space-between;
        :disabled{
            background-color: #E9E9E9;
        }
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;