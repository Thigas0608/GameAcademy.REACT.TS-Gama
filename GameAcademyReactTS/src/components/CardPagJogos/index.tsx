import imagemJogo from 'https://pt.wikipedia.org/wiki/Ficheiro:Black_ops_2_cover.jpg';
import { BotaoCard } from '../Botao/style'
import { Container } from './style'

let imagem = [
    "https://upload.wikimedia.org/wikipedia/pt/5/50/Black_ops_2_cover.jpg"
]

export default function CardPagJogos() {
    return (
        <>
            <Container>
                <img src={imagem[0]} />
                <BotaoCard>VER MAIS</BotaoCard>
            </Container>
        </>
    )
}
