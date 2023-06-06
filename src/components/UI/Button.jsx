const Button = (props) => {
    return ( 
        <button 
        type={props.type} 
        disabled={props.disabled} 
        className="max-w-[375px] bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold hover:text-white py-3 px-4 border border-blue-500 active:scale-90 hover:border-transparent rounded">
            {props.title}
        </button>
     );
}
 
export default Button;