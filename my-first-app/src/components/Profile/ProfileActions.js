import { Link } from "react-router-dom"

const ProfileAction = () => {
    return (
        <ul>
            <li><Link to="/translation">Translation</Link></li>
            <li><button>Clear history</button></li>
            <li><button>Logout</button></li>
        </ul>
    )
}

export default ProfileAction