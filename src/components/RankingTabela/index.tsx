import { useState, useEffect } from "react";

import { ContainerTabela, Info, PosicaoBotao } from './style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from "../Button/style";

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

export default function RankingTabela() {

    const [pontuacoes, setPontuacoes] = useState<Pontuacao[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/ranking')
            .then(response => {
                setPontuacoes(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar o ranking:', error);
            });
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredOrder = pontuacoes.filter((rankingT) => {
        return rankingT.jogador.nickname.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <> 
            <ContainerTabela>
                <Info>
                <input
                        type="text"
                        placeholder="Pesquisar por nome..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <table>
                        <thead>
                            <tr>
                                <th align="right">Nickname</th>
                                <th align="right">Jogo</th>
                                <th align="right">Data</th>
                                <th align="right">Pontos</th>
                            </tr>           
                        </thead>
                        <tbody>
                            {filteredOrder.map((rankingT) => (
                                <tr key={rankingT.id}>
                                    <td align="right">{rankingT.jogador.nickname}</td>
                                    <td align="right">{rankingT.jogo.nome}</td>
                                    <td align="right">{new Date(rankingT.createAt).toLocaleDateString()}</td>
                                    <td align="right">{rankingT.pontos}</td>
                                    <PosicaoBotao>
                                        <td>
                                            <Link to={`/detalhe/${rankingT.jogador.id}`}>
                                                <Button>ver detalhes</Button>
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

