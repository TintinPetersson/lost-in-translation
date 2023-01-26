import { createContext, useContext, useState } from 'react';
import { STORAGE_KEY_USER } from '../utils/storageKeys';
import { storageRead } from '../utils/storage';

const UserContext = createContext()

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));
    const state = { user, setUser }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider