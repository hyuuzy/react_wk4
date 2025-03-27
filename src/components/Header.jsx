import {Link} from "react-router"

function Header({title,slogan}){
    return(
        <header data-theme="luxury" className="text-center flex flex-col items-center header">
            <Link to='/'>
            <h2 className="text-sky-400 pt-5 pb-2 text-3xl font-bold">{title}</h2>
            </Link>
            
            <p className="text-gray-400  text-opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto pt-6">{slogan}</p>
            <div className="flex mt-6 justify-center">
                <hr className="text-sky-400 my-[25px] mx-auto w-[100px] border-0 border-t-[6px] opacity-100 rounded" />
            </div>
        </header>
    )
}   
export default Header