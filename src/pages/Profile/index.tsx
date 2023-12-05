import PlayerInformation from "../../components/ContainerPlayerInformation";
import ContainerGamesCard from "../../components/ContainerGamesCard"
import { Footer } from "../../components/Footer"
import SideBar from "../../components/SideBar"
import { Title } from "../../components/Titles/style";
import { ContainerBody, ContainerConteudo, ContainerPlayerInformation, Texto } from "./style"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Jogador {
    id: number;
    nome: string;
    email: string;
    nickname: string;
    imagem: string;
}

interface Game {
    id: number;
    nome: string;
    autor: string;
    website: string;
    imagem: string;
    descricao: string;
}

interface Ranking {
    id: number;
    pontos: number;
    createAt: number;
    jogador: Jogador;
    jogo: Game;
}



export default function Profile() {

    let { id } = useParams();
    const [pontuacoes, setPontuacoes] = useState<Ranking[]>([]);
    const [jogadores, setJogadores] = useState<any>([]);


    useEffect(() => {
        axios.get(`http://localhost:8080/jogadores/${id}`)
            .then(response => {
                setJogadores(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os pedidos:', error);
            });

        axios.get(`http://localhost:8080/ranking/jogador/${id}`)
            .then(response => {
                setPontuacoes(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os pedidos:', error);
            });
    }, []);


    return (
        <>
            <ContainerBody >
                <SideBar />
                <ContainerConteudo>
                    <Title> PERFIL </Title>
                    <PlayerInformation
                        key={jogadores.id}
                        id={jogadores.id}
                        nickname={jogadores.nickname}
                        email={jogadores.email}
                        imagem={jogadores.imagem}
                    />
                    <Texto>
                        <span>Ranking Jogador:</span>
                    </Texto>
                    {pontuacoes.map((ranking) => (
                        <ContainerGamesCard
                            key={ranking.id}
                            id={ranking.id}
                            imagem={ranking.jogo.imagem}
                            pontos={ranking.pontos}
                        />
                    ))}

                </ContainerConteudo>
            </ContainerBody >
            <Footer />
        </>
    )
}