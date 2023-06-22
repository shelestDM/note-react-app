import { NavLink } from "react-router-dom/cjs/react-router-dom";

const NavLinks = () => {

    const navLinks = [
        {to: '/', title: 'Notes' , exact: true},
        {to: '/about' , title: 'About App'},
        {to: '/developer' , title: 'Developer'},
        {to: '/changes-history' , title: 'History of Changes'},
    ];

    const activeStyle = {
        fontWeight: "bold",
        color: "#1d4ed8"
    };

    return ( 
        <ul className="flex flex-col gap-5 py-4 px-5 text-[#2563eb] w-[200px] text-lg font-medium text-left">
            {navLinks.map(navLink=>
                <li key={navLink.to} className="hover:underline transition-all duration-200">
                    <NavLink exact={navLink.exact} activeStyle={activeStyle} to={navLink.to}>{navLink.title}</NavLink>
                </li>
            )}       
        </ul>
     );
}
 
export default NavLinks;