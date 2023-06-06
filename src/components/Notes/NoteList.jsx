import Note from "./Note";

const NoteList = () => {

    let noteArr = [
        { title: 'test1', },
        { title: 'test2', },
        { title: 'test3', },
    ];

    return (
        <ul>
            {noteArr.map((note) =>
                <li key={note.title}>
                    <Note note={note} />
                </li>
            )}
        </ul>
    );
}

export default NoteList;