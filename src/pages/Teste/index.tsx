import { CardGamesT } from "../../components/CardGamesT";
import { useState, useEffect } from "react";
import axios from "axios";

interface Card {
  id: number;
  title: string;
  content: string;
}

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

  return <></>;
}
