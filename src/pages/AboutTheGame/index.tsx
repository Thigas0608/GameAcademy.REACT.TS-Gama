import { Footer } from "../../components/Footer"
import SideBar from "../../components/SideBar"
import ContainerConteudoGame from "../../components/ContainerConteudoGame"
import { ContainerBody, ContainerConteudo, } from "./style"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import RankingTabelaJogo from "../../components/RankingTabelaJogo"
import { Title } from "../../components/Titles/style"

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

interface Jogador {
    id: number;
    nome: string;
    email: string;
    nickname: string;
    imagem: string;
}

export default function AboutTheGame() {

    let { id } = useParams();
    const [pontuacoes, setPontuacoes] = useState<Ranking[]>([]);
    const [game, setJogo] = useState<any>([]);


    useEffect(() => {
        axios.get(`http://localhost:8080/jogos/${id}`)
            .then(response => {
                setJogo(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os pedidos:', error);
            });

        axios.get('http://localhost:8080/ranking/jogos/2')
            .then(response => {
                setJogo(response.data);
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
                    <ContainerConteudoGame
                        key={game.id}
                        id={game.id}
                        nome={game.nome}
                        imagem={game.imagem}
                        descricao={game.descricao}
                        autor={game.autor}
                        website={game.website}
                    />
                    <h1>Ranking do Jogo:</h1>
                    <RankingTabelaJogo />
                </ContainerConteudo>
            </ContainerBody>
            <Footer />
        </>
    )
}