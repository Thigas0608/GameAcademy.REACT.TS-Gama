import { ContainerGames, Games } from "./style";

const imagem = ['https://i.pinimg.com/564x/f0/85/11/f08511682c5ec51007e2da82ab7db2c1.jpg']

export default function ContainerGamesCard() {
    return (
        <>
            <ContainerGames>
                <Games>
                    <img src={imagem[0]} alt="Imagem do jogador" />
                    <p>Pontos: 1000</p>
                </Games>
                <Games>
                    <img src={imagem[0]} alt="Imagem do jogador" />
                    <p>Pontos: 1000</p>
                </Games>
                <Games>
                    <img src={imagem[0]} alt="Imagem do jogador" />
                    <p>Pontos: 1000</p>
                </Games>
                <Games>
                    <img src={imagem[0]} alt="Imagem do jogador" />
                    <p>Pontos: 1000</p>
                </Games>
                <Games>
                    <img src={imagem[0]} alt="Imagem do jogador" />
                    <p>Pontos: 1000</p>
                </Games>
            </ContainerGames>
        </>
    )
}