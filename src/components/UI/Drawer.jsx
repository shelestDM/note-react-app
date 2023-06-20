const Drawer = (props) => {

    const hideDrawerByClickBackdrop = (event) => {
        if(event.target.id === 'toggle__drawer'){
            props.onToggleDrawer();
        }
    };  

    return (
        <div onClick={hideDrawerByClickBackdrop} id="toggle__drawer" className="absolute top-0 left-0 backdrop-blur-sm w-screen h-screen z-[200] flex justify-end">
            <div className="h-screen bg-white">
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