import { Link } from "react-router-dom";
import{BiCameraMovie,BiSearch, BiSearchAlt2} from "react-icons/bi"
const Navbar = () => {
  return (
       <nav id="nvabar">
         <h2>
          <Link to="/">
         <BiCameraMovie /> VideoPlus
          </Link>         
         </h2>
         <form>
            <input type="text" placeholder="Realize a busca" /> 
            <button type="submit">
                <BiSearchAlt2 />
            </button>
         </form>
        </nav>
  );
} ;
export default Navbar;