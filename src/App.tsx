import { Outlet } from "react-router";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
