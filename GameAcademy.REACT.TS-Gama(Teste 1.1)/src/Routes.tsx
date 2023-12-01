import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Games from "./pages/Games";
import Players from "./pages/Players";
import Ranking from "./pages/Ranking";

// Configuração das rotas da aplicação
export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Games />, 
    },

    {
      path: "/players",
      element: <Players />, 
    },

    {
      path: "/ranking",
      element: <Ranking />, 
    },
    
  ]);

  // Fornece as rotas criadas para a aplicação
  return <RouterProvider router={routes} />;
}
