import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Games from "./pages/Games";

// Configuração das rotas da aplicação
export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Games />, 
    },
    
  ]);

  // Fornece as rotas criadas para a aplicação
  return <RouterProvider router={routes} />;
}
