import { useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";
import { translationAdd } from "../../api/User"

// Send the translation message that the user have inputted 
// in to the TranslationForm to our Glitch API and the to 
// the TranslationsWindow to display translation
const TranslationForm = ({ setMessage }) => {
    const { user } = useUser();
    const { register, handleSubmit, reset } = useForm();

    const handleMessage = async (event) => {
        setMessage(event.message)
        // Send to message API 
        if (event.message === "") {
            alert("Only letters please!")
            return;
        }
        await translationAdd(user, event.message);

        // Resets the form placeholder text and value!
        reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit(handleMessage)}>
                <div className="input-group pb-5 form">
                    <input
                        className="form-control fw-bold"
                        type="text"
                        placeholder="Hello?"
                        {...register("message")} />
                    <button className="btn fw-bold" type="submit">
                        <i className="bi bi-caret-right-fill"></i></button>
                </div>
            </form>
        </>
    )
}

export default TranslationForm