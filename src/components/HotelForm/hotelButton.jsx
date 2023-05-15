import { HotelData, HotelImage, HotelName, HotelText, StyledButton } from './hotelButtonStyles';

export default function HotelButton({ hotel, selectedHotel, setSelectedHotel }) {
    return (
        <StyledButton onClick={() => setSelectedHotel(hotel.id)} className={selectedHotel === hotel.id ? 'selected-button' : ''} >
            <HotelImage image={hotel.image} />
            <HotelName>{hotel.name}</HotelName>
            <HotelText>Tipo de acomodação:</HotelText>
            <HotelData>Single e Double</HotelData>
            <br/>
            <HotelText>Vagas disponíveis:</HotelText>
            <HotelData>103</HotelData>

        </StyledButton>
    )
}
