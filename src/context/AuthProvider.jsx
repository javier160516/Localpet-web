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
        console.log(auth);
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
            if(error.response.status == 400){
                localStorage.removeItem('localtoken');
            }
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