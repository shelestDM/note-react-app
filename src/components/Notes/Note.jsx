import { useState } from "react";
import Button from "../UI/Button";
import NoteDateBlock from "./NoteDateBlock";
import Textarea from "../UI/Textarea";

const Note = (props) => {

    const [canEdit, setCanEdit] = useState(false);
    const [note, setNote] = useState(props.note.title);

    const editNoteHandler = () => {
        setCanEdit(!canEdit);
        console.log(props.note.id);
    };

    const onInputHandler = (event) => {
        setNote(event.target.value);

    };

    return (
        <div className="w-full min-h-[100px] flex flex-col justify-between bg-white rounded-lg border border-gray-300 gap-3 mt-5 py-5 px-4 relative">
            <div className="flex justify-between relative">
                <p className="text-gray-800 text-md w-10/12">
                    {note}
                </p>
                {
                    canEdit && 
                    <Textarea value={note} onInputHandler={onInputHandler}/>
                }
                <Button $padding="0" $width="32px" $height="32px" title="x" $color="#dc2626" />
            </div>
            <NoteDateBlock date={props.note.date} time={props.note.time} editNoteHandler={editNoteHandler}/>
        </div>
    );
}

export default Note;