import { ContainerImage, Containertext } from "./style"

interface GameProps {
    id: number;
    nome: string;
    autor: string;
    website: string;
    imagem: string;
    descricao: string;
    pontuacao: number;
    nomePlayer: string;
}

export default function ContainerConteudoGame({ id, nome, autor, website, imagem, descricao, pontuacao, nomePlayer }: GameProps) {
    return (
        <>
            <ContainerImage>
                <img src={imagem} alt="Imagem do Jogo" />
            </ContainerImage>
            <Containertext>
                <h1>{nome}</h1>
                <span>SOBRE:</span>
                <p>{descricao}</p>
                <span>MAIOR PONTUAÇÃO:</span>
                <p>{pontuacao}</p>
                <span>MELHOR JOGADOR: </span>
                <p>{nomePlayer}</p>
                <span>DESENVOLVEDOR:</span>
                <p>{autor}</p>
            </Containertext>
        </>
    )
}