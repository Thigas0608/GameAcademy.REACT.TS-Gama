import { ContainerPlayer, ContainerPlayerInformation } from "./style"


interface playerProps {
    id: number;
    imagem: string;
    nickname: string;
    email: string;
}

export default function PlayerInformation({ imagem, id, nickname, email }: playerProps) {
    return (
        <>
            <ContainerPlayer>
                <img src={imagem} alt="Imagem do jogador" />
                <ContainerPlayerInformation>
                    <span>NICKNAME:</span>
                    <p>{nickname}</p>
                    <span>EMAIL:</span>
                    <p>{email}</p>
                </ContainerPlayerInformation>
            </ContainerPlayer>
        </>
    )
}