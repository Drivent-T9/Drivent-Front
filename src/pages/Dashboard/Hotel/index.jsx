import { useState } from "react";
import HotelForm from "../../../components/HotelForm";
import useBooking from "../../../hooks/api/useBooking";
import ResumeHotelForm from "../../../components/ResumeHotelForm";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { useEffect } from "react";

export default function Hotel() {
  let { booking, getBooking } = useBooking();
  const [haveBooking, setHaveBooking] = useState(false);

  async function setBooking() {
    booking = getBooking();
  }

  useEffect(() => {
    booking ? setHaveBooking(true) : setHaveBooking(false);
  }, [booking]);

  return (
    <>
      <StyledTypography variant='h4'>Escolha de hotel e quarto</StyledTypography>
      {
        haveBooking ? <ResumeHotelForm booking={booking} setBooking={setBooking} /> : <HotelForm setBooking={setBooking} />
      }

    </>
  )
}

const StyledTypography = styled(Typography)`
    font-family: 'Roboto';
    margin-bottom: 20px!important;
`;