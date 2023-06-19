import Notes from "./Notes/Notes";
import NewNoteForm from "./Notes/NewNoteForm";

const Content = () => {
    return (
        <div className= "mt-14 md:w-2/3 lg:w-1/2 2xl:w-1/3 mx-auto">
            <NewNoteForm />
            <div className="px-3">
                <hr />
                <Notes />
            </div>
        </div>
    );
}

export default Content;