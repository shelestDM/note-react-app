import { useState } from "react";

const Drawer = (props) => {

    let [dynamicStyles, setDynamicStyles] = useState('animate-drawerAppear h-screen bg-white');

    const hideDrawerByClickBackdrop = (event) => {
        if(event.target.id === 'toggle__drawer'){
            setDynamicStyles("animate-drawerDisappear h-screen bg-white");
            setTimeout(()=>{
                props.onToggleDrawer();
            },200)
        }
    };  

    return (
        <div onClick={hideDrawerByClickBackdrop} id="toggle__drawer" className="absolute top-0 left-0 backdrop-blur-sm w-screen h-screen z-[200] flex justify-end">
            <div className={dynamicStyles}>
                <ul className="flex flex-col gap-8 py-4 px-5 text-[#2563eb] text-lg font-medium text-left">
                    <li>About</li>
                    <li>Developer</li>
                    <li>History of Changes</li>
                    <li>Some page</li>
                </ul>
            </div>
        </div>
    );
}

export default Drawer;