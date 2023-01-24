import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
// Send the translation message that the user have inputted 
// in to the TranslationForm to our Glitch API and the to 
// the TranslationsWindow to display translation
const TranslationForm = ({ setMessage }) => {
    const { register, handleSubmit, reset} = useForm();
    const handleMessage = event => {
        setMessage(event.message)
        // Send to message API 
        reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit(handleMessage)}>
                <div className="input-group pb-5">
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