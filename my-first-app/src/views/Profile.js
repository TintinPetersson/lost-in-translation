import withAuth from "../hoc/withAuth"

const Profile = () => {
    return (
        <h1>Profile page</h1>
    )
}

export default withAuth(Profile)