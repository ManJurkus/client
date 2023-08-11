import { createContext, useState } from 'react';

const initialUser = {
    loggedIn: false,
};

export const UserContext = createContext(undefined);

export function UserContextValues(){
    const [user, setUser] = useState(initialUser);

    function loginUser(){
        console.log('loggin in...');
        setUser(prev => ({ ...prev, loggedIn: true }));
    }

    return{
        user,
        loginUser,
    }
}

export function UserContextProvider({ children }){
    return (
        <UserContextProvider value={UserContextValues()}>
            {children}
        </UserContextProvider>
    );
}