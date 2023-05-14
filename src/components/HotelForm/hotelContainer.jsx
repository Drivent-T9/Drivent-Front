import { Typography } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import HotelButton from "./hotelButton";

export default function HotelContainer({ hotels, selectedHotel, setSelectedHotel }) {
    return (
        <>
            <StyledSubtitle>Primeiro, escolha seu hotel</StyledSubtitle>
            <StyledContainer>
                {
                    hotels.map(h => {
                        return (
                            <HotelButton key={h.id} hotel={h} selectedHotel={selectedHotel} setSelectedHotel={(data) => setSelectedHotel(data)} />
                        )
                    })
                }
            </StyledContainer>
        </>
    )
}

const StyledSubtitle = styled(Typography)`
    margin-top: 16px !important;
    margin-bottom: 18px !important;
    color: #8e8e8e;
    font-size: 20px !important;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 19px;
`;