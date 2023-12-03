import { Button } from '../Button/style'
import { Container } from './style'

interface GameProps{
    id: number;
    imagem: string;
}

export function CardGamesT({imagem}:GameProps){
   
    return (
        <>
            <Container>
                <section>
                    <img src={imagem} />
                    <Button>Ver mais</Button>
                </section>
            </Container>
        </>
    )
}
