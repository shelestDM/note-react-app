import { useState } from "react";
import Note from "./Note";
import Toast from "../UI/Toast";

const NoteList = (props) => {

    const [showToast, setShowToast] = useState(false);

    const toggleToast = () => {
        setShowToast(true);
        setTimeout(()=>{setShowToast(false);},3000);
    };

    return (
        <>
            <ul id="note__list" className="animate-notesAppear pb-8">
                {
                props.notes.map((note) =>
                <li className="animate-notesAppear" key={note.id}>
                    <Note onToggleToastByDelete={toggleToast} note={note} />
                </li>)
                }
            </ul>
            {showToast && <Toast title="The note was successfully deleted" $key={1} $color="#ef4444" $bgColor="#fecaca"/>            }
        </>
    );
}

export default NoteList;