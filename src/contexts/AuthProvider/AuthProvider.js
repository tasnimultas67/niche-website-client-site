import React, {createContext } from 'react';
import useFirebase from '../../Components/hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const allContaxts = useFirebase()
    return (
        <AuthContext.Provider value ={allContaxts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;