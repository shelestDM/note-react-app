import { useState } from "react";
import BurgerMenu from "./UI/BurgerMenu";
import Drawer from "./UI/Drawer";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {

    const [toggleDrawer, setToggleDrawer] = useState(false);

    const toggleDrawerHandler = () => {
        setToggleDrawer(!toggleDrawer);
    };

    return (
        <div className="fixed top-0 right-0 z-50 px-3 bg-[#2563eb] w-full h-14 flex justify-between items-center">
            <h4 title="To the notes" className="text-white font-bold font-mono">
               <NavLink to="/"> Note App</NavLink>
            </h4>
            <BurgerMenu onToggleDrawer={toggleDrawerHandler} />
            {toggleDrawer && <Drawer onToggleDrawer={toggleDrawerHandler}/>}
        </div>
    );
}

export default Navbar;