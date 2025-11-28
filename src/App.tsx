import { Outlet, useLocation } from "react-router";
import Accordeon from "./components/Accordeon";
import { DataProvider } from "./components/DataProvider";
import GeneralHeader from "./components/GeneralHeader";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const location = useLocation();
  const isSecretPage = location.pathname === "/";

  return (
    <DataProvider>
      {!isSecretPage && (
        <nav>
          <GeneralHeader />
        </nav>
      )}

      <main>
        <Outlet />
      </main>

      <Footer />
    </DataProvider>
  );
}

export default App;
