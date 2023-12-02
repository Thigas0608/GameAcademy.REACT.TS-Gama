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
                    <Link to="/">Jogos</Link>
                    <Link to="/rank">Rank</Link>
                    <Link to="/perfil">Perfil</Link>
                </nav>
            </Container>
        </>
    )
}