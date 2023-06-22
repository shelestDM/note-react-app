import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import useFetch from "../../hooks/useFetch";
import { noteCreationDate, noteCreationTime } from "../../utils/date";
import { useDispatch } from "react-redux";
import { notesActions } from "../../store";
import Toast from "../UI/Toast";

const Form = () => {

    const dispatchFunc = useDispatch();

    const [note, setNote] = useState('');
    const [showToast, setShowToast] = useState(false);
    const createNote = useFetch();
    const { isLoading, fetchNotesHandler } = createNote;
    
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
            setShowToast(true);
            noteObj.id = newId.name;
            dispatchFunc(notesActions.addNote(noteObj));
        });
    };

    const onInputHandler = (event) => {
        setNote(event.target.value);
    };

    const onFocusHandler = () => {
        setShowToast(false);
    };

    return (
        <>
            <form onSubmit={onSubmitFormHandler} className="bg-white flex items-center justify-between rounded px-3 py-6 ">
                <Input $type='text' $value={note} $onFocusHandler={onFocusHandler} $onInputHandler={onInputHandler} $placeholder="Enter the note" />
                <Button $disabled={isLoading} $type="submit" title={"Add note"} $hoverBgColor="blue" />
            </form>
            {showToast && <Toast/>}
        </>
    );
}

export default Form;