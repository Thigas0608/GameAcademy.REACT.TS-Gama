import { Link } from "react-router-dom";
import { Container, Menu } from "./style";
import Logo from "../../../public/GameAcademyLogo.png";

export default function Header() {
    return (
        <>
            <Container>
                <img src={Logo} alt="" />
                <Menu>
                    <ul>
                        <li>
                            <Link to={"/"}>JOGOS</Link>
                        </li>
                        <li>
                            <Link to={"/ranking"}>RANKING</Link>
                        </li>
                        <li>
                            <Link to={"/players"}>JOGADORES</Link>
                        </li>
                    </ul>
                </Menu>
            </Container>

        </>
    )
}