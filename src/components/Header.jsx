import { Link } from "react-router"
import { useState } from "react"
import NavBar from "../components/Navbar"
import CartSummary from "../components/CartSummary";
import SetColorMode from "../components/SetColorMode";

function Header({ title, slogan }) {

    const [isOnTouch, setIsOnTouch] = useState(false);
    
    return (
        <header data-theme="luxury" className="text-center flex flex-col items-center header">
            <Link to='/'>
                <h2 className="text-sky-400 pt-5 pb-2 text-3xl font-bold">{title}</h2>
            </Link>

            <p className="text-gray-400  text-opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto pt-6">{slogan}</p>

            <div className="absolute right-0 top-8 grid grid-cols-2 gap-0 w-[4rem] md:w-[7rem]">
                <SetColorMode />
                <CartSummary />
            </div>
            <div className="flex mt-6 justify-center">
                <hr className="text-sky-400 my-[25px] mx-auto w-[100px] border-0 border-t-[6px] opacity-100 rounded" />
            </div>
            <NavBar />
        </header>
    )
}
export default Header;