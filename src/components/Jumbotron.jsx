import BurgerMenu from "./UI/BurgerMenu";

const Jumbotrone = () => {
    return (
        <div className="fixed top-0 right-0 px-3 bg-[#2563eb] w-full h-14 flex justify-between items-center">
            <h4 className="text-white font-bold font-mono">
                Note App
            </h4>
            <BurgerMenu/>
        </div>
    );
}

export default Jumbotrone;