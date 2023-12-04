import { Footer } from "../../components/Footer"
import SideBar from "../../components/SideBar"
import ContainerConteudoGame from "../../components/ContainerConteudo"
import { ContainerBody, ContainerConteudo } from "./style"

export default function AboutTheGame() {
    return (
        <>
            <ContainerBody >
                <SideBar />
                <ContainerConteudo>
                    <ContainerConteudoGame />
                </ContainerConteudo>
            </ContainerBody>
            <Footer />
        </>
    )
}