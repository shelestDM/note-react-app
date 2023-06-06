import NoteList from "./Notes/NoteList";
import Form from "./UI/Form";

const Content = () => {
    return (
        <div className="mt-14">
            <Form />
            <div className="px-3">
                <hr />
                <NoteList />
            </div>
        </div>
    );
}

export default Content;