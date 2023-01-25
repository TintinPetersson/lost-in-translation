import { Navigate } from "react-router-dom";
import { useUser } from "../components/context/UserContext"

const withAuth = Component => props => {
    const { user } = useUser()
    if (user !== null) {
        return <Component {...props} />
    }

    return <Navigate to="/" />
}

export default withAuth