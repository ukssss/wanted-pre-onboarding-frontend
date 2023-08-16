import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
    token: null,
    setToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};
