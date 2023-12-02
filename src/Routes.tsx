import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Games from "./pages/Games";
import Players from "./pages/Players";
import Ranking from "./pages/Ranking";
import Teste from "./pages/Teste";
import Page404 from "./pages/Page404";

// Configuração das rotas da aplicação
export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Games />,
    },
    {
      path: "/ranking",
      element: <Ranking />,
    },
    {
      path: "/players",
      element: <Players />,
    },

    
    {
      path: "/teste",
      element: <Teste />
    },
    {
      path: "*",
      element: <Page404 />
    }

  ]);

  // Fornece as rotas criadas para a aplicação
  return <RouterProvider router={routes} />;
}
