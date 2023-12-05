import { ContainerGames, Games } from "./style";


interface cardProps {
    id: number;
    imagem: string;
    pontos: number;
}

export default function ContainerGamesCard({ id, imagem, pontos }: cardProps) {
    return (
        <>
            <ContainerGames>
                <Games>
                    <img src={imagem} alt="Imagem do jogador" />
                    <p>Pontos: {pontos}</p>
                </Games>
            </ContainerGames>
        </>
    )
}