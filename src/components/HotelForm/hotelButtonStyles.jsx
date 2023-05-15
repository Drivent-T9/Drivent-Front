import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const StyledButton = styled.button`
    width: 196px;
    height: 264px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 10px;
    background-color: #ebebeb;
    padding: 16px 14px;
    box-shadow: 0px 2px 3px 1px rgba(0,0,0,.3);

    :hover{
        cursor: pointer;
        background-color: #e7e7e7;
        transform: translatey(-2px);
        box-shadow: -1px 3px 5px 2px rgba(0,0,0,.3);
    }

    p{
        width: 100%;
        text-align: start;
        color: #3c3c3c;
    }
`;

export const HotelImage = styled.div`
    width: 100%;
    height: 109px;
    border-radius: 5px;
    background-image: url(${props => props.image});
    background-size: contain;
`;

export const HotelName = styled(Typography)`
    font-size: 20px !important;
    margin: 10px 0 !important;
`;

export const HotelText = styled(Typography)`
    font-size: 12px !important;
    font-weight: 700 !important;
`;

export const HotelData = styled(Typography)`
    font-size: 12px !important;
`;