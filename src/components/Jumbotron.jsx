import { useState } from "react";
import BurgerMenu from "./UI/BurgerMenu";
import Drawer from "./UI/Drawer";

const Jumbotrone = () => {

    const [toggleDrawer, setToggleDrawer] = useState(false);

    const toggleDrawerHandler = () => {
        setToggleDrawer(!toggleDrawer);
    };

    return (
        <div className="fixed top-0 right-0 z-50 px-3 bg-[#2563eb] w-full h-14 flex justify-between items-center">
            <h4 className="text-white font-bold font-mono">
                Note App
            </h4>
            <BurgerMenu onToggleDrawer={toggleDrawerHandler} />
            {toggleDrawer && <Drawer onToggleDrawer={toggleDrawerHandler}/>}
        </div>
    );
}

export default Jumbotrone;