import ProfileAction from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {

    const { user } = useUser()

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