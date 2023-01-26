import { useEffect } from "react"
import { findUserById } from "../../api/User"
import ProfileClearHistory from "./ProfileClearHistory"
import ProfileTranslationHistory from "./ProfileTranslationHistory"
import { STORAGE_KEY_USER } from "../../utils/storageKeys"
import { useUser } from "../../context/UserContext"
import withAuth from "../../utils/withAuth"
import { storageSave } from "../../utils/storage"

const Profile = () => {

    const { user, setUser } = useUser()

    useEffect(() => {
        const findUser = async () => {
            const [error, latestUser] = await findUserById(user.id)
            if (error === null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }

        findUser()
    }, [setUser, user.id])

    return (
        <div className="container">
            <div className="row justify-content-center">
            <h2 className="fw-bolder pt-5 mt-3">Hello there.<br></br> Welcome back <span className="text-warning">{user.username}!</span></h2>
                <ProfileTranslationHistory translations={user.translations} />
                <ProfileClearHistory />
            </div>
        </div>
    )
}

export default withAuth(Profile)