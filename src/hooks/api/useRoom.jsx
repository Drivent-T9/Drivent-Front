import useAsync from "../useAsync";
import * as hotelApi from '../../services/hotelApi';
import useToken from "../useToken";

export function useRoom() {
    const token = useToken();

    const {
        data: rooms,
        loading: roomsLoading,
        error: roomsError,
        act: getRooms,
    } = useAsync((data) => hotelApi.getRooms(data, token), false);

    return {
        rooms,
        roomsLoading,
        roomsError,
        getRooms,
    };
}