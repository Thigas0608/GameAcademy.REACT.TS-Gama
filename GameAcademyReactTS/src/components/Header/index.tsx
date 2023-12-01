import { Container } from "react-bootstrap";
import { HeaderStyled } from "./style";


export default function Header() {
    return (
        <>
            <HeaderStyled>
                <Container>
                    <ul>
                        <li>
                            Início
                        </li>
                        <li>
                            Serviços
                        </li>
                        <li>
                            Relatórios
                        </li>
                    </ul>
                </Container>
            </HeaderStyled>
        </>
    )
}