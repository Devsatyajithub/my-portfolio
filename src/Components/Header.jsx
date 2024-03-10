import { useState } from "react";

const Header=()=>{
  const[brandName] = useState("Satyajit Nayak");
  const[menuLinks] = useState([
    {
        title:'Home',
        link: "/home",
        id: 1,
    },
    {
        title:'About',
        link: "/about",
        id: 2,
    },
    {
        title:'Skills',
        link: "/skills",
        id: 3,
    },
    {
        title:'Portfolio',
        link: "/portfolio",
        id: 4,
    },
    {
        title:'Contact',
        link: "/contact",
        id: 5,
    },
]);
const [actionButton]= useState({
    title:"Hire Me",
    link:"/hire-me",

})
    return (
        <>
        <div className=" h-20  border main flex justify-between items-center px-16 bg-grey-300 shadow-lg">
            <div>{/* Logo*/ }
            <h1 className="text-2xl font-bold">{brandName}</h1>

            </div>
            <div className="space-x-3">{/*menu button*/ }
            {menuLinks.map((link)=> (
                <a key={link.id} href={link.link} className="hover:text-sky-600">{link.title}</a>
            ))}
        

            </div>
            <div>{/*button*/ }
            <a href="actionButton.link" 
            className='bg-sky-600 p-1 m-1 rounded-lg shadow-lg text-1xl hover:text-white'
            >{actionButton.title}
            </a>

            </div>

        </div>
        </>
    ) ;
    
};
export default Header;