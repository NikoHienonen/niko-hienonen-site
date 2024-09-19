import { Footer } from "components/common/Footer";
import { Header } from "components/common/Header";
import { Outlet } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="bg-eh animate-downUp bg-cover bg-top-center w-screen flex flex-col justify-between pb-5 min-h-screen">
      <div className="mb-12">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
