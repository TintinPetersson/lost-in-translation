import { createContext, useContext, useState } from 'react';

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) // { user, setUser }
}

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const state = { user, setUser }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider