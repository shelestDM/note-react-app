import { useState } from "react";
import Button from "../UI/Button";

const Form = () => {

    const [note, setNote] = useState('');

    let date = new Date();
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
    };
    let noteCreationTime = date.toLocaleTimeString('en-US', { hour12: false }).slice(0, -3);
    let noteCreationDate = date.toLocaleString("en-US", options);


    const onInputHandler = (event) =>{
        setNote(event.target.value)
    };

    const noteValidation = () => {
        if(note.length === 0){
            const noteObj = {
                title: "Empty note? What would that mean?",
                date: noteCreationDate,
                time: noteCreationTime
            };
            return noteObj;
        } else if(note.length > 0){
            const noteObj = {
                title: note,
                date: noteCreationDate,
                time: noteCreationTime
            };
            return noteObj;
        }
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        console.log(noteValidation());
        // createNote(noteValidation);        
    };

    const createNote = async (note) => {
        const response = await fetch("https://react-note-app-97225-default-rtdb.europe-west1.firebasedatabase.app/notes.json", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(note)
        });
        if(response.status === 200){
            setNote('');
        }
    };

    return (
        <form onSubmit={onSubmitFormHandler} className="bg-white flex items-center justify-between rounded px-3 py-6 ">
            <input
                onInput={onInputHandler}
                value={note}
                className="shadow basis-[70%] md:basis-10/12 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter the note">
            </input>
            <Button $type="submit" title={"Add note"}/>
        </form>
    );
}

export default Form;