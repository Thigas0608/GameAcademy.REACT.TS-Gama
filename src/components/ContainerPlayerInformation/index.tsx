import { ContainerPlayer, ContainerPlayerInformation } from "./style"

const imagem = ['https://i.pinimg.com/564x/f0/85/11/f08511682c5ec51007e2da82ab7db2c1.jpg']

export default function PlayerInformation() {
    return (
        <>
            <ContainerPlayer>
                <img src={imagem[0]} alt="Imagem do jogador" />
                <ContainerPlayerInformation>
                    <span>NICKNAME:</span>
                    <p>Martins0214</p>
                    <span>EMAIL:</span>
                    <p>Martins0214@gmail.com</p>
                </ContainerPlayerInformation>
            </ContainerPlayer>
        </>
    )
}