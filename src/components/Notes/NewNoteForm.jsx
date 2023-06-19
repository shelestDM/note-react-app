import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import useFetch from "../../hooks/useFetch";
import Loader from "../UI/Loader";
import { noteCreationDate, noteCreationTime } from "../../utils/date";
import { useDispatch } from "react-redux";
import { notesActions } from "../../store";
import SmallLoader from "../UI/SmallLoader";

const Form = () => {

    const dispatchFunc = useDispatch();

    const [note, setNote] = useState('');
    const createNote = useFetch();
    const { error, isLoading, fetchNotesHandler } = createNote;
    
    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        const noteObj = {
            title: note,
            date: noteCreationDate,
            time: noteCreationTime,
        };

        fetchNotesHandler({
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: noteObj
        })
        .then((newId)=>{
            setNote('');
            noteObj.id = newId.name;
            dispatchFunc(notesActions.addNote(noteObj));
        });
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
            {isLoading && <SmallLoader/>}
        </>
    );
}

export default Form;