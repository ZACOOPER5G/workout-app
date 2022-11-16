import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoading) login(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <form className="login" onSubmit={handleSubmit} >
            <h3>Login</h3>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button disabledhandleSubmit={handleSubmit} >Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
};
