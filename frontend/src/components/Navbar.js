import { Link } from "react-router-dom";
import { useAuthContext} from '../hooks/useAuthContext';
import { useLogout } from "../hooks/useLogout";

export const Navbar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleClick = () => {
        logout();
        user = null;
    };

    return (
        <header>
            <div className="container" >
                <Link to="/" >
                    <h1>Workout App</h1>
                </Link>
                <nav>
                    {/* show login/signup or logout depending on whether user is logged in or not */}
                    {
                        user === null ? 
                            <div>
                                <Link to="/login" >Login</Link>
                                <Link to="/signup" >Signup</Link>
                            </div>
                         : 
                            <div>
                                <button onClick={handleClick} >Logout</button>
                            </div>
                    }
                </nav>
            </div>
        </header>
    )
};