
// Send the translation message that the user have inputted 
// in to the TranslationForm to our Glitch API and the to 
// the TranslationsWindow to display translation
const translationForm = ({ setMessage }) => {
    // TODO: handle state that is defined in translations
    const handleMessage = message => {
        setMessage();

        console.log("value: ", message);
    }


    // TODO: set message with button below
    return (
        <>
            <form>
                <div className="input-group pb-5">
                    <input
                        className="form-control fw-bold"
                        type="text"
                        placeholder="Enter text massage here: " />
                    <button className="btn fw-bold" type="submit">
                        <i className="bi bi-caret-right-fill"></i></button>
                </div>
            </form>
        </>
    )
}


export default translationForm

// setMessage(TEXT)