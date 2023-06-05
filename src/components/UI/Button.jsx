const Button = (props) => {
    return ( 
        <button 
        type={props.type} 
        disabled={props.disabled} 
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 active:scale-90 hover:border-transparent rounded">
            {props.title}
        </button>
     );
}
 
export default Button;