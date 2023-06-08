import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../UI/Loader";
import FetchError from "../UI/FetchError";
import NoteList from "./NoteList";
import { useDispatch, useSelector } from "react-redux";
import { notesActions } from "../../store/index";

const Notes = () => {

    const dispatchFunc = useDispatch();
    const storeNotes = useSelector((state)=>state.notes.notes);

    const { error, isLoading, fetchNotesHandler } = useFetch();

    const convertReceivedData = (data) => {
        let noteData = [];
        for (const key in data) {
          noteData.push({
            id: key,
            title: data[key].title,
            date: data[key].date,
            time: data[key].time,
          })
        };
        
        dispatchFunc(notesActions.fetchNotes(noteData.reverse()));
    };

    useEffect(()=>{
        fetchNotesHandler({method: "GET"},convertReceivedData);
    },[]);

    const successLoadNotes = !error && !isLoading;

    console.log(storeNotes);

    return (
        <ul>
          { isLoading && <Loader title="Loading notes"/> }
          { successLoadNotes && <NoteList notes={storeNotes}/>}
          { error && <FetchError error={error}/>}
        </ul>
    );
}

export default Notes;
