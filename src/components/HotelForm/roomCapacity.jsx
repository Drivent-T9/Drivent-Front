import { PersonOutlineOutlined, Person } from '@mui/icons-material';

export default function RoomCapacity({ available, occupied }) {
    const slots = Array(available + occupied);

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
        </div>
    )
}