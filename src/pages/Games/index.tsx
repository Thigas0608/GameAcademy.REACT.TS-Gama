import { CardGames } from "../../components/CardGames";
import SideBar from "../../components/SideBar";
import { Footer } from "../../components/Footer";
import { SectionCards, SectionPesquisaTitulo, ContainerBody, ContainerConteudo } from "./style";
import { Title } from "../../components/Titles/style";


export default function Games() {
    return (
        <>
            <ContainerBody>
                <SideBar />
                <ContainerConteudo>
                    <SectionPesquisaTitulo>
                        <Title> JOGOS </Title>
                        <div>
                            <input type="text" />
                        </div>
                    </SectionPesquisaTitulo>

                    <SectionCards>
                        <CardGames />
                        <CardGames />
                        <CardGames />
                        <CardGames />
                        <CardGames />
                        <CardGames />
                        <CardGames />
                        <CardGames />
                        <CardGames />
                        <CardGames />
                        <CardGames />
                        <CardGames />
                    </SectionCards>
                </ContainerConteudo>
            </ContainerBody>
            <Footer />
        </>
    )
}