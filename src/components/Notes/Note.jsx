import { useRef, useState } from "react";
import Button from "../UI/Button";
import NoteDateBlock from "./NoteDateBlock";
import Textarea from "../UI/Textarea";
import useFetch from "../../hooks/useFetch";
import { notesActions } from "../../store";
import { useDispatch } from "react-redux";
import Toast from "../UI/Toast";
import { createPortal } from "react-dom";


const Note = (props) => {

    const dispatchFunc = useDispatch();

    const [disappearNote, setDisappearNote] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const [canEdit, setCanEdit] = useState(false);
    const [note, setNote] = useState(props.note.title);
    const editAreaRef = useRef(null);

    const deleteNote = useFetch();
    const editNote = useFetch();

    const { fetchNotesHandler: onEditeNote } = editNote;
    const { fetchNotesHandler: onDeleteNote } = deleteNote;


    const editNoteHandler = (event) => {
       if(event.target.id !== 'delete__note'){
            editNoteFunction();
       }
    };

    const editNoteFunction = () => {
        setCanEdit(!canEdit);
        if (!canEdit) {
            setFocusAtTextarea();
        } else {
            let body = {
                title: note,
                date: props.note.date,
                time: props.note.time
            };
            onEditeNote({ ...createOptions("PUT", body) })
            .then(()=>{
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 3000);
            })
        };
    }

    const setFocusAtTextarea = () => {
        editAreaRef.current.focus();
        editAreaRef.current.selectionStart = editAreaRef.current.value.length;  
    };

    const deleteNoteHandler = () => {
        setDisappearNote(true);
        setTimeout(() => {
            onDeleteNote({ ...createOptions("DELETE") });
            dispatchFunc(notesActions.deleteNote(props.note.id));
        }, 500);
        props.onToggleToastByDelete();
    };

    const createOptions = (method, body) => {
        return {
            id: props.note.id,
            method: method,
            headers: { 'Content-type': 'application/json' },
            body: body ? body : null
        };
    };

    const onInputHandler = (event) => {
        setNote(event.target.value);
    };

    return (
        <>
            <div onClick={editNoteHandler} className={disappearNote ? "animate-notesDisappear" : ''}>
                <div className="w-full min-h-[100px] flex flex-col justify-between bg-white rounded-lg border border-gray-300 gap-3 mt-5 py-5 px-4 relative">
                    <div className="flex justify-between relative">
                        <p className="text-gray-800 text-md w-10/12 break-all">
                            {note}
                        </p>
                        <Textarea $isVisible={canEdit} ref={editAreaRef} value={note} onInputHandler={onInputHandler} />
                        <Button id='delete__note' $onClickHandler={deleteNoteHandler} $padding="0" $width="32px" $height="32px" title="x" $bgColor="#dc2626" $hoverBgColor="#dc2626" />
                    </div>
                    <NoteDateBlock date={props.note.date} time={props.note.time} editNoteHandler={editNoteHandler} />
                </div>
            </div>
            {showToast && 
                createPortal(
                    <Toast title="The note was successfully edited" $key={0} $color="#2563eb" $bgColor="#dbeafe"/>,
                    document.getElementById('root')
                )
            }
        </>
    );
}

export default Note;

