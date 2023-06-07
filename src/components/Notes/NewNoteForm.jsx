import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import useFetch from "../../hooks/useFetch";
import Loader from "../UI/Loader";

const Form = () => {

    let date = new Date();
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
    };
    let noteCreationTime = date.toLocaleTimeString('en-US', { hour12: false }).slice(0, -3);
    let noteCreationDate = date.toLocaleString("en-US", options);

    const [note, setNote] = useState('');
    const createNote = useFetch();
    const { error, isLoading, fetchNotesHandler } = createNote;

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        const noteObj = {
            title: note,
            date: noteCreationDate,
            time: noteCreationTime
        };

        fetchNotesHandler({
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: noteObj
        });
        if(!isLoading){
            setNote('');
        }
        console.log(error);
    };

    const onInputHandler = (event) => {
        setNote(event.target.value)
    };

    return (
        <>
            <form onSubmit={onSubmitFormHandler} className="bg-white flex items-center justify-between rounded px-3 py-6 ">
                <Input $type='text' $value={note} $onInputHandler={onInputHandler} $placeholder="Enter the note" />
                <Button $disabled={isLoading} $type="submit" title={"Add note"} />
            </form>
            {isLoading && <Loader title="Adding new note"/> }
        </>
    );
}

export default Form;