import { Typography, Button } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import RoomCapacity from "./roomCapacity";
import { useEffect } from "react";
import { useRoom } from "../../hooks/api/useRoom";

export default function RoomsForm({ hotelId, selectedRoom , setSelectedRoom }) {
    const { getRooms } = useRoom();
    const [rooms, setRooms] = useState([]);

    useEffect(async () => {
        try
        {
            setSelectedRoom(null);
            const hotel = await getRooms(hotelId);
            setRooms(hotel.Rooms);
        } catch (error)
        {
            console.log(error);
        }
    }, [hotelId]);

    if (rooms.length === 0) return null;
    return (
        <>
            <StyledTypography variant="subtitle1">Ótima pedida! Agora escolha seu quarto:</StyledTypography>
            <StyledButtonGrid>
                {
                    rooms.map((r) => {
                        const selected = selectedRoom === r.id ? 1 : 0;
                        const available = r.capacity - r._count.Booking - selected;
                        return (
                            <Button key={r.id} variant="outlined" onClick={() => setSelectedRoom(r.id)} className={selectedRoom === r.id ? "selected-button" : ""} disabled={available === 0}>
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
    font-size: 20px !important;
`;

const StyledButtonGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 17px;
    margin-bottom: 46px;

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