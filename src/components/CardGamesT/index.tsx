import { Button } from '../Button/style'
import { Container } from './style'

const imagem = [
    "https://upload.wikimedia.org/wikipedia/pt/5/50/Black_ops_2_cover.jpg"
]

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
