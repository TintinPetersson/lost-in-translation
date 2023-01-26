import { useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext"
import { translationAdd } from "../../api/User"
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../utils/storageKeys";

const TranslationForm = ({ setMessage }) => {

    const { user, setUser } = useUser();
    const { register, handleSubmit, reset } = useForm();

    const handleMessage = async (event) => {

        setMessage(event.message)

        if (event.message === "") {
            alert("Only letters please!")
            return;
        }
        const [error, updatedUser] = await translationAdd(user, event.message);

        if (error !== null) return;

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(handleMessage)}>
            <div className="input-group">
                <input
                    className="search-input form-control fw-bold rounded-pill"
                    type="text"
                    placeholder="hello"
                    {...register("message")} />
                <button className="btn fw-bold" type="submit">
                    <i className="bi bi-caret-right-fill"></i>
                </button>
            </div>
        </form>
    )
}

export default TranslationForm