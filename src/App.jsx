import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="bg-neutral-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
