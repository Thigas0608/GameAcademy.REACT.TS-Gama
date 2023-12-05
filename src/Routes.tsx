import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Games from "./pages/Games";
import RankingGames from "./pages/RankingGames";
import Teste from "./pages/Teste";
import Page404 from "./pages/Page404";
import AboutTheGame from "./pages/AboutTheGame";
import Profile from "./pages/Profile";
import RankingPlayers from "./pages/RankingPlayers";

// Configuração das rotas da aplicação
export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Games />,
    },
    {
      path: "/rankingGames",
      element: <RankingGames />,
    },
    {
      path: "/rankingPlayers",
      element: <RankingPlayers />,
    },
    {
      path: "/teste",
      element: <Teste />
    },
    {
      path: "*",
      element: <Page404 />
    },
    {
      path: "/jogo/:id",
      element: <AboutTheGame />
    },
    {
      path: "/perfil/:id",
      element: <Profile />
    }

  ]);

  // Fornece as rotas criadas para a aplicação
  return <RouterProvider router={routes} />;
}
