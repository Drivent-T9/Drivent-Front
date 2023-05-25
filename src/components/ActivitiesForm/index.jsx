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

export default function Schedule() {
    return (
        <>
            <Header>Escolha de Atividades</Header>

            <Options>
                <Day>Sexta, 22/10</Day>
                <Day>Sábado, 23/10</Day>
                <Day>Domingo, 24/10</Day>
            </Options>

            <Events>
                <Container>

                    <Title>Auditório Principal</Title>
                    <Box>
                        <EventButton>
                            <EventTitle>Free Fire: Bagulho irado</EventTitle>
                            <EventTime>9:00 - 10:00</EventTime>

                            <Availability>
                                <img src={available}></img>
                                <Amount>10 vagas</Amount>
                            </Availability>
                        </EventButton>

                        <EventButton>
                            <EventTitle>Dota 2: Apenas triste</EventTitle>
                            <EventTime>10:00 - 11:00</EventTime>
                        </EventButton>
                    </Box>

                </Container>

                <Container>

                    <Title>Auditório Lateral</Title>
                    <Box>
                        <EventButton>
                            <EventTitle>Minecraft: Negócio esquisito</EventTitle>
                            <EventTime>9:00 - 10:00</EventTime>
                        </EventButton>
                    </Box>

                </Container>

                <Container>

                    <Title>Sala de Workshop</Title>
                    <Box>
                        <EventButton>
                            <EventTitle>Fortnite: Construções brabas</EventTitle>
                            <EventTime>9:00 - 10:00</EventTime>
                        </EventButton>
                    </Box>

                </Container>
            </Events>
        </>
    )
}
