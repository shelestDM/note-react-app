const Toast = (props) => {
    return (
        <div className="animate-toastAppear absolute left-[calc(50%-150px)] bottom-10 z-[200] bg-teal-500 flex items-center justify-start gap-5 w-[300px] p-4 mb-4 text-gray-500 rounded-lg shadow">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-teal-500 bg-green-100 rounded-lg">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Check icon</span>
            </div>
            <div className="text-sm text-white font-normal">The note added successfully.</div>
        </div>
    );
}

export default Toast;