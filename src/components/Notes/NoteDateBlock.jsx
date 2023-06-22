const NoteDateBlock = (props) => {
    return (
        <div>
            <div className="flex items-center justify-between text-gray-800">
                <div className="flex flex-col">
                    <p className="text-[10px] font-semibold">
                        {props.date}
                    </p>
                    <small className="text-[10px] font-semibold">
                        {props.time}
                    </small>
                </div>
                <button onClick={props.editNoteHandler} className="w-8 h-8 rounded-full bg-gray-800  text-white flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-[0.25s]  focus:ring-black active:scale-90" type="button">
                    <img className="" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg" alt="edit" />
                </button>
            </div>
        </div>
    );
}

export default NoteDateBlock;