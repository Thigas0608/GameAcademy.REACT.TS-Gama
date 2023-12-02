import { Button } from '../Button/style'
import { Container } from './style'

const imagem = [
    "https://upload.wikimedia.org/wikipedia/pt/5/50/Black_ops_2_cover.jpg"
]

export function CardGames() {
    return (
        <>
            <Container>
                <section>
                    <img src={imagem[0]} />
                    <Button>Ver mais</Button>
                </section>
            </Container>
        </>
    )
}
