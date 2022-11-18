import { Link } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from "../hooks/useLogout";

export const Navbar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleClick = () => {
        logout();
    };

    return (
        <header>
            <div className="container" >
                <Link to="/" >
                    <h1>Gym Buddy</h1>
                </Link>
                <nav>
                    {/* show login/signup or logout depending on whether user is logged in or not */}
                    {
                        user ? 
                            <div>
                                <span>{user && user.email} </span>
                                <button onClick={handleClick} >Logout</button>
                            </div>
                        : 
                            <div>
                                <Link to="/login" >Login</Link>
                                <Link to="/signup" >Signup</Link>
                            </div>
                    }
                </nav>
            </div>
        </header>
    )
};