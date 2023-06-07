import { useCallback, useState } from "react";

const useFetch = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchNotesHandler = useCallback(async (requestOptions,convertReceivedData) => {
        setIsLoading(true);
        let id = requestOptions.id ? requestOptions.id : '' ;
        try {
            const response = await fetch(`https://react-note-app-97225-default-rtdb.europe-west1.firebasedatabase.app/notes/${id}.json`,{
                method: requestOptions.method ? requestOptions.method : 'GET',
                headers: requestOptions.headers ? requestOptions.headers : {},
                body: requestOptions.body ? JSON.stringify(requestOptions.body) : null 
            });

            if(!response.ok){
                throw new Error("Something went wrong :(");
            }

            const data = await response.json();
            convertReceivedData(data);

        } catch (e) {
            setError(e.message)
        } finally{
            setTimeout(()=>{
                setIsLoading(false);
            },1500)
        }
    },[]);

    return {error, isLoading, fetchNotesHandler};
};

export default useFetch;