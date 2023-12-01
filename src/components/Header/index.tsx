import Logo from "./../../../public/GameAcademyLogo.png"
import {HeaderStyled} from ""

export default function Header() {
    return (
        <>
            <aside>
                <HeaderStyled>
                    <img src={Logo} alt="Logo Epic Steam" />
                </HeaderStyled>
            </aside>
        </>
    );
}