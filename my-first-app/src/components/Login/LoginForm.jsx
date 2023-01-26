import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/User'
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../utils/storageKeys';

// Username validation rules
const usernameConfig = {
    required: true,
    minLength: 2
}

const LoginForm = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    useEffect(() => {
        if (user !== null) {
            navigate("translation")
        }
    }, [user, navigate])

    const onSubmit = async ({ username }) => {
        username = username.charAt(0).toUpperCase() + username.slice(1);
        setLoading(true);
        const [error, userResponse] = await loginUser(username);
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false);
    }

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
                <div className="input-group pb-5">
                    <input
                        className="search-input form-control fw-bold rounded-pill"
                        type="text"
                        placeholder="What's your name?"
                        {...register("username", usernameConfig)} />
                    <button className="btn fw-bold" type="submit" disabled={loading}>
                        <i className="bi bi-caret-right-fill"></i>
                    </button>

                </div>
                {errorMessage}
                {loading && <p>Logging in...</p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}

export default LoginForm