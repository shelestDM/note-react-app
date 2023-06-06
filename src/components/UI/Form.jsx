import { useState } from "react";
import Button from "../UI/Button";

const Form = () => {

    const [note, setNote] = useState('');

    const onInputHandler = (event) =>{
        setNote(event.target.value)
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        console.log(note);
        setNote('');
    }

    return (
        <form onSubmit={onSubmitFormHandler} className="bg-white flex items-center justify-between rounded px-3 py-6 ">
            <input
                onInput={onInputHandler}
                value={note}
                className="shadow basis-[70%] md:basis-10/12 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter the note">
            </input>
            <Button $type="submit" title={"Add note"}/>
        </form>
    );
}

export default Form;