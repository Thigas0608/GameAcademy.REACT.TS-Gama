import { Footer } from "../../components/Footer"
import SideBar from "../../components/SideBar"
import { Title } from "../../components/Titles/style";
import { ContainerBody, ContainerConteudo, ContainerPlayerInformation, ContainerPlayer, ContainerGames, Games, Texto } from "./style"

const imagem = ['https://i.pinimg.com/564x/f0/85/11/f08511682c5ec51007e2da82ab7db2c1.jpg']

export default function Profile() {
    return (
        <>
            <ContainerBody >
                <SideBar />
                <ContainerConteudo>
                    <Title> PERFIL </Title>
                    <ContainerPlayer>
                        <img src={imagem[0]} alt="Imagem do jogador" />
                        <ContainerPlayerInformation>
                            <span>NICKNAME:</span>
                            <p>Martins0214</p>
                            <span>EMAIL:</span>
                            <p>Martins0214@gmail.com</p>
                        </ContainerPlayerInformation>
                    </ContainerPlayer>
                    <Texto>
                        <span>JOGOS:</span>
                    </Texto>
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
                </ContainerConteudo>
            </ContainerBody>
            <Footer />
        </>
    )
}