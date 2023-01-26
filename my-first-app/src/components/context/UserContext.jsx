import { createContext, useContext, useState } from 'react';
import { STORAGE_KEY_USER } from '../../utils/StorageKeys';
import { storageRead } from '../../utils/storage';

// Creates the ...
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) 
}

const UserProvider = ({ children }) => {
    //
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));
    const state = { user, setUser }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider