import { Outlet } from "react-router";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { useEffect } from "react";
import authApi from "./services/api-auth";
import { useAuth } from "./store/useAuth";

const App: React.FC = () => {
  const { setUser } = useAuth();
  useEffect(() => {
    const fetchAccount = async () => {
      const res = await authApi.fetchAccount();
      if (res.statusCode === 200 && res.data) {
        setUser(res.data);
      }
    };
    fetchAccount();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
