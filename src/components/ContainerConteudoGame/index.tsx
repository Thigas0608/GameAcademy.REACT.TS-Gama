import { ContainerImage, Containertext, Container } from "./style"

interface GameProps {
    id: number;
    nome: string;
    autor: string;
    website: string;
    imagem: string;
    descricao: string;
}

export default function ContainerConteudoGame({ nome, autor, website, imagem, descricao }: GameProps) {
    return (
        <>
            <Container>
                <ContainerImage>
                    <img src={imagem} alt="Imagem do Jogo" />
                </ContainerImage>
                <Containertext>
                    <h1>{nome}</h1>
                    <span>SOBRE:</span>
                    <p>{descricao}</p>
                    <span>DESENVOLVEDOR:</span>
                    <p>{autor}</p>
                    <span>WEBSITE: </span>
                    <p>{website}</p>
                </Containertext>
            </Container>
        </>
    )
}