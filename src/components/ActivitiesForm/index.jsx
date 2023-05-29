import {
    Header,
    Options,
    Day,
    Events,
    Container,
    Title,
    Box,
    EventButton,
    EventTitle,
    EventTime,
    Availability,
    Amount
} from "./styled"
import available from '../../assets/images/pepicons_enter.png'
import { useActivity } from "../../hooks/api/useActivity"
import { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { useEffect } from "react";

export default function Schedule() {
    const { getActivity } = useActivity();
    const [activities, setActivities] = useState(null);
    const [day, setDay] = useState(dayjs().add(1, 'day'))



    useEffect(async () => {
        const data = await getActivity();
        setActivities(data);

    }, [])
    if (activities === null) return null;

    return (
        <>
            <Header>Escolha de Atividades</Header>

            <Options>
                <Day onClick={() => setDay(dayjs().add(1, 'day'))}>Terça, 30/05</Day>
                <Day onClick={() => setDay(dayjs().add(2, 'days'))}>Quarta, 31/05</Day>
                <Day onClick={() => setDay(dayjs().add(3, 'days'))}>Quinta, 01/06</Day>
            </Options>

            <Events>
                {
                    activities.map(p => {
                        return (
                            <Container key={p.id}>
                                <Title>{p.name}</Title>
                                <Box>
                                    {
                                        p.Activity.filter(a => dayjs(a.startsAt).date() === dayjs(day).date()).map(a => {
                                            return (
                                                <EventButton key={a.id}>
                                                    <EventTitle>{a.name}</EventTitle>
                                                    <EventTime>{dayjs(a.startsAt).hour()} - {dayjs(a.endsAt).hour()}</EventTime>

                                                    <Availability>
                                                        <img src={available}></img>
                                                        <Amount>{a.capacity - a._count.Registration} vagas</Amount>
                                                    </Availability>
                                                </EventButton>
                                            )
                                        })
                                    }
                                </Box>
                            </Container>
                        )
                    })
                }

            </Events>
        </>
    )
}
