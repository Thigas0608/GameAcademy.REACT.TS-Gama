import { Header } from "../../components/Header"
import { Body } from "../Page404/style"

export default function Page404() {
    return (
        <>
            <Header />
            <Body>
                <h2>Algo de errado não está certo!</h2>
                <span>404</span>
                <h2>Página Não Localizada!</h2>
            </Body>
        </>
    )
}