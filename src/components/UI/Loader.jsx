const Loader = (props) => {
    return (
        <div className="absolute top-0 left-0 text-center flex items-center justify-center backdrop-blur-sm w-screen h-screen z-[200]">
            <div className="animate-bounce font-bold text-lg text-blue-500">
                <span className="animate-pulse">{props.title}...</span>
            </div>
        </div>
    );
}

export default Loader;