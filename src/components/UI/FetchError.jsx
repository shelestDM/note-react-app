const FetchError = (props) => {
    return ( 
        <h2 className="text-red-500 font-medium text-center text-lg mt-10">
            {props.error}. Try again later &#128530;
        </h2>
     );
}
 
export default FetchError;