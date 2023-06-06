import Note from "./Note";

const NoteList = (props) => {
    return (
        <ul className="animate-notesAppear">
            {
            props.notes.map((note) =>
            <li key={note.id}>
                <Note note={note} />
            </li>)
            }
        </ul>
    );
}

export default NoteList;