import Logo from "../../../public/GameAcademyLogo.png";
import { Container } from "../Footer/style"

export function Footer() {
    return (
        <>
            <Container>
                <img src={Logo} alt="Logo EpicSteam" />
                <p>@2023 EpicSteam - Todos os direitos reservados</p>
            </Container>
        </>
    )
}