import Jumbotrone from "./components/Jumbotron";
import CustomRoutes from "./components/Routes";

function App() {
  return (
    <>
      <Jumbotrone/>
      <div className="mt-14">
         <CustomRoutes/>
      </div>
    </>
  );
}

export default App;
