import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Notificao from "./pages/Notificao";
import Filttros from "./pages/Filttros";
import EditarCliente from "./pages/EditarCliente";
import Pagamentos from "./pages/Pagamentos";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/filttros":
        title = "";
        metaDescription = "";
        break;
      case "/editar-cliente":
        title = "";
        metaDescription = "";
        break;
      case "/pagamentos":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Notificao />} />
      <Route path="/filttros" element={<Filttros />} />
      <Route path="/editar-cliente" element={<EditarCliente />} />
      <Route path="/pagamentos" element={<Pagamentos />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
