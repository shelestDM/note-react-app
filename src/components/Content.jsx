import Notes from "./Notes/Notes";
import NewNoteForm from "./Notes/NewNoteForm";

const Content = () => {
    return (
        <div className="mt-14">
            <NewNoteForm />
            <div className="px-3">
                <hr />
                <Notes />
            </div>
        </div>
    );
}

export default Content;