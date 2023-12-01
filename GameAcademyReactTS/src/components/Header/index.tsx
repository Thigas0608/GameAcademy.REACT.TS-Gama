import { Aside } from "./style";
import { Container } from "./style";



export default function Header() {
    return (
        <>
            <Aside>
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
            </Aside>
        </>
    )
}