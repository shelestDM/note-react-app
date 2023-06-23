const AboutPage = () => {
    return (
        <div className="bg-blue-400 h-screen text-white text-center space-y-5">
            <h1 className="text-2xl">Hi there!</h1>
            <h3 className="text-2xl">This is page-tutorial how to use my "Note App"</h3>
            <div className="w-3/4 mx-auto space-y-5">
                <p className="text-xl text-justify">
                    On the home page, you can add multiple notes. You can do this by entering
                    a note in the input box, and when you're done, click "Add Note".
                    The note will then appear in the list of notes below, and you will
                    receive an information message stating that the note was successfully created.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;