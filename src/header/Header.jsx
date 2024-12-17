import { NavLink } from "react-router";
import "./Header.css";
const Header = () => {
    return (
      
            // <nav>
            //     <NavLink to="/">Home</NavLink>
            //     <Link to="/about">About Us</Link>
            //     <Link to="/contact">Contact</Link>
            //     <Link to='/users'>Users</Link>
            //     <Link to='/posts'>Posts</Link>
            // </nav>
      
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
            
        
    );
};

export default Header;
