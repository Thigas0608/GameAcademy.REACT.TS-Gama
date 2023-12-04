import Logo from "../../../public/GameAcademyLogo.png";
import { Container} from "./style";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <Container>
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
                <nav>
                    <Link to="/">JOGOS</Link>
                    <Link to="/ranking">RANKING</Link>
                    <Link to="/players">JOGADORES</Link>
                </nav>
            </Container>
        </>
    )
}