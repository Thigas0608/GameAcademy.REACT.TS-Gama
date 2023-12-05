import PlayerInformation from "../../components/ContainerPlayerInformation";
import ContainerGamesCard from "../../components/ContainerGamesCard"
import { Footer } from "../../components/Footer"
import SideBar from "../../components/SideBar"
import { Title } from "../../components/Titles/style";
import { ContainerBody, ContainerConteudo,Texto } from "./style"

export default function Profile() {
    return (
        <>
            <ContainerBody >
                <SideBar />
                <ContainerConteudo>
                    <Title> PERFIL </Title>
                    <PlayerInformation />
                    <Texto>
                        <span>JOGOS:</span>
                    </Texto>
                    <ContainerGamesCard />
                </ContainerConteudo>
            </ContainerBody>
            <Footer />
        </>
    )
}