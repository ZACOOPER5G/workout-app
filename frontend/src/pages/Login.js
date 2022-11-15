import { useState } from "react";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { auth, dispatch } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password)

        // const response = await fetch("/api/user/signup");
        // const json = await response.json();

        // if (response.ok) {

        // }
    };

    return (
        <form className="login" onSubmit={handleSubmit} >
            <h3>Login</h3>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    )
};
