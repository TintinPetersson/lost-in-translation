import { useEffect } from "react"
import { findUserById } from "../api/User"
import ProfileAction from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { STORAGE_KEY_USER } from "../const/StorageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

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
                <ProfileHeader username={user.username} />
                <ProfileTranslationHistory translations={user.translations} />
                <ProfileAction />
            </div>
        </div>
    )
}

export default withAuth(Profile)