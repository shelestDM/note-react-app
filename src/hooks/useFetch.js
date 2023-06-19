import { useCallback, useState } from "react";

const useFetch = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const fetchNotesHandler = useCallback(async (requestOptions, convertReceivedData) => {
        setIsLoading(true);
        let id = requestOptions.id ? requestOptions.id : '';
        let dinamicUrl = requestOptions.url ? requestOptions.url : 'https://react-note-app-97225-default-rtdb.europe-west1.firebasedatabase.app/notes/';

        try {
            const response = await fetch(`${dinamicUrl}${id}.json`, {
                method: requestOptions.method ? requestOptions.method : 'GET',
                headers: requestOptions.headers ? requestOptions.headers : {},
                body: requestOptions.body ? JSON.stringify(requestOptions.body) : null
            });

            if (!response.ok) {
                throw new Error("Something went wrong :(");
            }
            if (requestOptions.method === "GET") {
                const data = await response.json();
                convertReceivedData(data);
            }
            if (requestOptions.method  === "POST") {
                const id = await response.json();
                return id;
            }

        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false);

            // setTimeout(() => {
            // }, 1500)
        }
    }, []);

    return { error, isLoading, fetchNotesHandler };
};

export default useFetch;