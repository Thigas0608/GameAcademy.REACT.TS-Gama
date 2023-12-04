import { Footer } from "../../components/Footer"
import SideBar from "../../components/SideBar"
import { ContainerBody, ContainerConteudo, ContainerImage, Containertext } from "./style"

const imagem = ['https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/405px-God_of_War_2018_capa.png']


interface GameProps {
    id: number
    imagem: string;
    nome: string;
    descricao: string;
}

export default function JogoDetalhado() {
    return (
        <>
            <ContainerBody >
                <SideBar />
                <ContainerConteudo>
                    <ContainerImage>
                        <img src={imagem[0]} alt="Imagem do Jogo" />
                    </ContainerImage>
                    <Containertext>
                        <h1>God of War Ragnarök</h1>
                        <span>SOBRE:</span>
                        <p>God of War: Ragnarok, se passa três anos após o evento do jogo de 2018, com Atreus um pouco mais velho enquanto tenta entender suas origens e a importância de seu nome de batismo — Loki. A busca por respostas vai desencadear no auge do Ragnarok, o fim dos tempos Nórdicos.</p>

                        <span>DESENVOLVEDOR:</span>
                        <p>Santa Monica Studio</p>
                    </Containertext>
                </ContainerConteudo>
            </ContainerBody>
            <Footer />
        </>
    )
}