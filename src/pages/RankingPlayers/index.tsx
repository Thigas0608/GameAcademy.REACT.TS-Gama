import { Footer } from "../../components/Footer";
import SideBar from "../../components/SideBar";
import { ContainerBody, ContainerConteudo } from "./style";
import { Title } from "../../components/Titles/style";

export default function RankingPlayers() {
    return (
        <>
            <ContainerBody>
                <SideBar />
                <ContainerConteudo>
                    <Title> JOGADORES </Title>
                </ContainerConteudo>
            </ContainerBody>
            <Footer />
        </>
    );
}