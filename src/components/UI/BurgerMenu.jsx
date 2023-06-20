const BurgerMenu = (props) => {
    return (
        <button onClick={props.onToggleDrawer} className="relative group">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:rotate-45 -translate-x-1"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-500 "></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:-rotate-45 -translate-x-1"></div>
            </div>
        </button>
    );
}

export default BurgerMenu;