
const ProfileHeader = ({ username }) => {
    return (
        <header>
            <h2 className="fw-bolder pt-5 mt-3">Hello there.<br></br> Welcome back <span className="text-warning">{username}!</span></h2>
        </header>
    )
}

export default ProfileHeader