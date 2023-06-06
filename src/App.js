import Content from "./components/Content";
import Jumbotrone from "./components/Jumbotron";

function App() {

  const test = async () => {
    const response = await fetch("https://react-note-app-97225-default-rtdb.europe-west1.firebasedatabase.app/notes.json");
    let data = await response.json();
    let jokesData = []
    for (const key in data) {
      jokesData.push({
        type: data[key],
      })
    }
    console.log(jokesData);
    console.log(data);
  };


  return (
    <>
      <Jumbotrone />
      <Content/>
    </>
  );
}

export default App;
