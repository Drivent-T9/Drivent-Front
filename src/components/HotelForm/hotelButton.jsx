import { HotelData, HotelImage, HotelName, HotelText, StyledButton } from './hotelButtonStyles';

export default function HotelButton({ hotel, selectedHotel, setSelectedHotel }) {
    const typeRooms = () => {
        if (hotel.typeRooms.single)
        {
            if (hotel.typeRooms.double)
            {
                if (hotel.typeRooms.triple) return 'Single, Double e Triple';
                return 'Single e Double';
            }
            if (hotel.typeRooms.triple) return 'Single e Triple';
            return 'Single';
        }

        if (hotel.typeRooms.double)
        {
            if (hotel.typeRooms.triple) return 'Double e Triple';
            return 'Double';
        }

        return 'Triple';
    }

    return (
        <StyledButton onClick={() => setSelectedHotel(hotel.id)} className={selectedHotel === hotel.id ? 'selected-button' : ''} >
            <HotelImage image={hotel.image} />
            <HotelName>{hotel.name}</HotelName>
            <HotelText>Tipo de acomodação:</HotelText>
            <HotelData>{typeRooms()}</HotelData>
            <br/>
            <HotelText>Vagas disponíveis:</HotelText>
            <HotelData>{hotel.freeSlots}</HotelData>

        </StyledButton>
    )
}
