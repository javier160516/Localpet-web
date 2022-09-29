import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        authenticateUser();
    }, []);
    
    const authenticateUser = async () => {
        const token = localStorage.getItem('localtoken');
        if (!token) {
            setLoading(false);
            return;
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const { data } = await clienteAxios('/home', config);
            setAuth(data);
        } catch (error) {
            console.log(error.response);
        }
        setLoading(false)
    }

    const signOff = () => {
        localStorage.removeItem('localtoken');
        setAuth({});
    }

    return <AuthContext.Provider
            value={{
                auth,
                setAuth,
                signOff,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
}

export { AuthProvider };

export default AuthContext;