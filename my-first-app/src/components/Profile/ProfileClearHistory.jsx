import { translationClearHistory } from "../../api/User"
import { storageSave } from "../../utils/storage"
import { useUser } from "../context/UserContext"
import { STORAGE_KEY_USER } from "../../utils/StorageKeys"

const ProfileAction = () => {

    const { user, setUser } = useUser()

    const handleClearHistoryClick = async () => {
        if (!window.confirm("Are you sure?\nThis can not be undone.")) {
            return
        }

        const [clearError] = await translationClearHistory(user.id)

        if (clearError !== null) {
            return
        }

        const updatedUser = {
            ...user,
            translations: []
        }
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return (
        <div>
            <button onClick={handleClearHistoryClick} className="btn btn-warning">Clear history</button>
        </div>

    )
}

export default ProfileAction