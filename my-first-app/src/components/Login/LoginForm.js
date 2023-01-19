import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/User'

// Username validation rules
const usernameConfig = {
    required: true,
    minLength: 2
}

// User login logic 
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // 
    const onSubmit = async ({ username }) => {
        const [error, user] = await loginUser(username)
        console.log("Error: ", error)
        console.log("User: ", user)
    }

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



    console.log(errors);
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

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginForm