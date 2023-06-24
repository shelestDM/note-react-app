import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CustomRoutes from "./components/Routes";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <div className="mt-14 flex-auto">
         <CustomRoutes/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
