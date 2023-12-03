import { CardGames } from "../../components/CardGames";
import SideBar from "../../components/SideBar";
import { Footer } from "../../components/Footer";
import {
  SectionCards,
  SectionPesquisaTitulo,
  ContainerBody,
  ContainerConteudo,
} from "./style";
import { Title } from "../../components/Titles/style";
import { CardGamesT } from "../../components/CardGamesT";
import { useState, useEffect } from "react";
import axios from "axios";

interface Game {
  id: number;
  nome: string;
  autor: string;
  website: string;
  imagem: string;
  descricao: string;
}

export default function Teste() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jogos/");
        setGames(response.data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ContainerBody>
        <SideBar />
        <ContainerConteudo>
          <SectionPesquisaTitulo>
            <Title> JOGOS </Title>
            <div>
              <input type="text" />
            </div>
          </SectionPesquisaTitulo>

          <SectionCards>
            {games.map((game) => (
              <CardGamesT
                key={game.id}
                imagem={game.imagem}
                id={game.id}
              />
            ))}
          </SectionCards>
        </ContainerConteudo>
      </ContainerBody>
      <Footer />
    </>
  );
}
