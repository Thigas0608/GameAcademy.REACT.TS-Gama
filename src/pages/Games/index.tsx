import { CardGames } from "../../components/CardGames";
import { Footer } from "../../components/Footer";
import SideBar from "../../components/SideBar";
import { ContainerBody, ContainerConteudo, SectionCards, SectionPesquisaTitulo } from "./style";


export default function Games() {
    return (
        <>
            <ContainerBody>
                <SideBar />
                <ContainerConteudo>
                    <SectionPesquisaTitulo>
                        <h1>TITULO</h1>
                        <p>filtro</p>
                    </SectionPesquisaTitulo>

                    <SectionCards>
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