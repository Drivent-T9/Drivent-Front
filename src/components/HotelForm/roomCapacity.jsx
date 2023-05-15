import { PersonOutlineOutlined, Person } from '@mui/icons-material';
import styled from 'styled-components';

export default function RoomCapacity({ available, occupied, selected }) {
    return (
        <div>
            {
                [...Array(available)].map((x, i) => {
                    return <PersonOutlineOutlined key={i} />
                })
            }
            {
                [...Array(occupied)].map((x, i) => {
                    return <Person key={i} />
                })

            }
            {
                [...Array(selected)].map((x, i) => {
                    return <SelectedIcon key={i} />
                })
            }
        </div>
    )
}

const SelectedIcon = styled(Person)`
    color: #FF4791;
`;