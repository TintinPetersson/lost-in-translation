import { useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";
import { translationAdd } from "../../api/User"
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/StorageKeys";

// Send the translation message that the user have inputted 
// in to the TranslationForm to our Glitch API and the to 
// the TranslationsWindow to display translation
const TranslationForm = ({ setMessage }) => {
    const { user, setUser } = useUser();
    const { register, handleSubmit, reset } = useForm();

    const handleMessage = async (event) => {
        setMessage(event.message)
        // Send to message API 
        if (event.message === "") {
            alert("Only letters please!")
            return;
        }
        const [error, updatedUser] = await translationAdd(user, event.message);

        if (error !== null) {
            return
        }

        // Keep UI state and server state in sync.
        storageSave(STORAGE_KEY_USER, updatedUser)
        // Update context state.
        setUser(updatedUser)

        // Resets the form placeholder text and value.
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