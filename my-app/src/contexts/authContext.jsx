import  { createContext } from 'react'
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService.js'
import usePersistedState from '../hooks/usePersistedState.js';
import Path from '../path.js';

const AuthContext = createContext();

AuthContext.displayName = "AuthContext"

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        //TODO NOTIFICATION WHEN SOMETHING DOES NOT MATCH OR THERE IS SOME ERROR
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        console.log(result);
        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    }


    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.username, values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);


        navigate(Path.Home);

    }

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('accessToken');
        navigate(Path.Home)
    };


    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,

        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.email,
        userId: auth._id,
    };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;