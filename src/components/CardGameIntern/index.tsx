import { Container } from './style'

const imagem = [
    "https://pbs.twimg.com/media/D3kIXO7W4AsDeB0?format=jpg&name=large"
]

export function CardGameIntern() {
    return (
        <>
            <Container>
                <section>
                    <img src={imagem[0]} />
                    <p>Pontos:</p>
                </section>
            </Container>
        </>
    )
}
