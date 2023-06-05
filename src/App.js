import Note from "./components/Notes/Note";
import NoteList from "./components/Notes/NoteList";
import Button from "./components/UI/Button";

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

  test();
  return (
    <div className="py-5 px-3">
      {/* <Button title='Add note'/> */}
      <Note title={"title"} description={"description"}/>
      {/* <NoteList/> */}
    </div>
  );
}

export default App;
