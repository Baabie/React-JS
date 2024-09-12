import { Button } from "../components/styleds/Button";
import { Container } from "../components/styleds/Container";
import { Section } from "../components/styleds/MainBanner";
import { Title } from "../components/styleds/Title";

export function Home(){
    return (
        <>
            <Section>
                <Title color="black">Meu título</Title>

                <Container>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque vero voluptates earum quasi nisi, laudantium mollitia exercitationem quos dolorum alias dolore repudiandae in enim praesentium deleniti libero totam harum omnis!
                    </p>
                </Container>

                <Button>Saiba mais</Button>
            </Section>
        </>
    )
    
}