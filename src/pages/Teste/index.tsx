import { CardGames } from "../../components/CardGames";
import Header from "../../components/Header";
import { ContainerBody, ContainerConteudo, SectionCards, SectionPesquisaTitulo } from "./style";


export default function Teste() {
    return (
        <>
            <ContainerBody>
                <Header />
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
        </>
    )
}