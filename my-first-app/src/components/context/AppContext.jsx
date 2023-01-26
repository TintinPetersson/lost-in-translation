import UserProvider from "./UserContext";

// Setup for the ContextAPI   
const AppContext = ({ children }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
}

export default AppContext