import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../UI/Loader";
import FetchError from "../UI/FetchError";
import NoteList from "./NoteList";

const Notes = () => {

    const [notes, setNotes] = useState([]);
    const getNotesFromFirebase = useFetch();
    const { error, isLoading, fetchNotesHandler } = getNotesFromFirebase;

    const convertReceivedData = (data) => {
        let jokesData = [];
        console.log(data);
        for (const key in data) {
          jokesData.push({
            id: key,
            title: data[key].title,
            date: data[key].date,
            time: data[key].time,
          })
        };
        
        setNotes([...jokesData.reverse()]);
      };
    useEffect(()=>{
        // fetchNotesHandler({},convertReceivedData);
    },[]);

    return (
        <ul>
          {!error && isLoading && <Loader/> }
          {!error && !isLoading && <NoteList notes={notes}/>}
          {error && <FetchError error={error}/>}
        </ul>
    );
}

export default Notes;
