import { Footer } from "../../components/Footer";
import SideBar from "../../components/SideBar";
import { ContainerBody, ContainerConteudo } from "./style";
import { Title } from "../../components/Titles/style";
import axios from "axios";
import { useState, useEffect } from "react";
import RankingTabelaGeral from "../../components/RankingTabelaGeral";

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

export default function Ranking() {
  const [pontuacoes, setPontuacoes] = useState<Pontuacao[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Pontuacao[]>("http://localhost:8080/ranking");
        setPontuacoes(response.data);
      } catch (error) {
        console.error("Erro ao buscar pontuações:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ContainerBody>
        <SideBar />
        <ContainerConteudo>
          <Title> Ranking geral </Title>
          <RankingTabelaGeral />
        </ContainerConteudo>
      </ContainerBody>
      <Footer />
    </>
  );
}
