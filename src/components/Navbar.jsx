import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='flex items-center justify-between max-w-6xl mx-auto px-4 py-4'>
            <h1 className='text-3xl font-bold'>Recipe Calories</h1>

            <ul className="hidden md:flex gap-6 text-gray-600">
                 <li>Home</li>
                 <li>Recipes</li>
                 <li>About</li>
                 <li>Search</li>
            </ul>

            
            <div className=" flex items-center gap-2 input input-bordered w-56">
                <IoIosSearch className="text-gray-400 text-3xl" />
                <input 
            
            type="text" 
            placeholder="Search"
            className='input input-bordered w-40 rounded-3xl bg-slate-100 pl-4' 
/>
            <FaRegUserCircle  className="text-3xl bg-green-400 rounded-4xl"/>
            </div>
        </div>
    );
};

export default Navbar;