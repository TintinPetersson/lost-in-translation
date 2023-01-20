import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/User'
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

// Username validation rules
const usernameConfig = {
    required: true,
    minLength: 2
}

// User login logic 
const LoginForm = () => {
    //Hooks
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    // Local state
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    // Side Effecs
    useEffect(() => {
        if (user !== null) {
            navigate("translations")
        }
    }, [user, navigate])

    // Event Handlers
    const onSubmit = async ({ username }) => {

        setLoading(true);
        const [error, userResponse] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave("translation-user", userResponse)
            setUser(userResponse)
        }
        setLoading(false);
    }
    // Render Function
    // Displays a message if user input is invalid
    const errorMessage = (() => {
        if (!errors.username) {
            return null;
        }
        if (errors.username.type === "required") {
            return <span className="text-danger">Username is required.</span>
        }
        if (errors.username.type === "minLength") {
            return <span className="text-danger">Username is too short.</span>
        }
    })();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="What's your name?"
                        {...register("username", usernameConfig)} />
                    <br></br>
                    {errorMessage}
                </fieldset>
                <br></br>

                <button className="btn btn-primary" type="submit" disabled={loading}>Submit</button>

                {loading && <p>Logging in...</p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}

export default LoginForm