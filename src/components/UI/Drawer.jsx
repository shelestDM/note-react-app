import { useState } from "react";
import NavLinks from "../NavLinks";

const Drawer = (props) => {

    let [dynamicStyles, setDynamicStyles] = useState('animate-drawerAppear h-screen bg-white');

    const hideDrawerByClickBackdrop = (event) => {
        setDynamicStyles("animate-drawerDisappear h-screen bg-white");
        setTimeout(()=>{
            props.onToggleDrawer();
        },200)
    };  

    return (
        <div onClick={hideDrawerByClickBackdrop} id="toggle__drawer" className="absolute top-0 left-0 backdrop-blur-sm w-screen h-screen z-[200] flex justify-end">
            <div className={dynamicStyles}>
                <NavLinks/>
            </div>
        </div>
    );
}

export default Drawer;