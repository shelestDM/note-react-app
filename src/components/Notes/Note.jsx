import Button from "../UI/Button";

const Note = (props) => {

    let date = new Date();
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
    };
    let noteCreationTime = date.toLocaleTimeString('en-US', { hour12: false }).slice(0, -3);
    let noteCreationDate = date.toLocaleString("en-US", options);

    return (
        <div className="w-full min-h-[100px] flex flex-col justify-between bg-white rounded-lg border border-gray-400 gap-3 mt-5 py-5 px-4 relative">
            <div className="flex justify-between">
                <p className="text-gray-800 text-md mb-3 basis-10/12">
                    {props.note.title}
                </p>
                <Button $padding="0" $width="32px" $height="32px" title="x" $color="#dc2626"/>
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-800">
                    <div className="flex flex-col">
                        <p className="text-xs font-semibold">
                            {noteCreationDate}
                        </p>
                        <small className="text-xs font-semibold">
                            {noteCreationTime}
                        </small>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-gray-800  text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black active:scale-90" type="button">
                        <img className="" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg" alt="edit" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Note;