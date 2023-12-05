import { useState, useEffect } from "react";
import { ContainerTabela, Info, PosicaoBotao } from './style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BotaoTabela, Button } from "../Button/style";

interface Jogador {
    id: number;
    nome: string;
    email: string;
    nickname: string;
    imagem: string;
}

interface Jogo {
    id: number;
    nome: string;
    autor: string;
    website: string;
    imagem: string;
    descricao: string;
}

interface Pontuacao {
    id: number;
    pontos: number;
    createAt: number;
    jogador: Jogador;
    jogo: Jogo;
}

export default function RankingTabelaGeral() {

    const [pontuacoes, setPontuacoes] = useState<Pontuacao[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/ranking/')
            .then(response => {
                setPontuacoes(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os pedidos:', error);
            });
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredRanking = pontuacoes.filter((ranking) => {
        return ranking.jogador.nickname.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <ContainerTabela>
                <Info>
                    <input
                        type="text"
                        placeholder="Pesquisar por nickname"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Nickname</th>
                                <th align="right">Jogo</th>
                                <th align="right">Data</th>
                                <th align="right">Pontos</th>
                                <th align="right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRanking.map((ranking) => (
                                <tr key={ranking.id}>
                                    <td align="right">{ranking.jogador.nickname}</td>
                                    <td align="right">{ranking.jogo.nome}</td>
                                    <td align="right">{new Date(ranking.createAt).toLocaleDateString()}</td>
                                    <td align="right">{ranking.pontos}</td>
                                    <PosicaoBotao>
                                        <td>
                                            <Link to={`/perfil/${ranking.jogador.id}`}>
                                                <BotaoTabela>Ver mais</BotaoTabela>
                                            </Link>
                                        </td>
                                    </PosicaoBotao>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Info>
            </ContainerTabela>
        </>
    );
}
