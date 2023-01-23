
// Send the translation message that the user have inputted 
// in to the TranslationForm to our Glitch API and the to 
// the TranslationsWindow to display translation
const translationForm = (  {message, setMessage }) => {
    
    const handleMessage = value => {
        setMessage(value);

        console.log("value: ", value);
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
                    <button className="btn fw-bold" type="submit" value= {message} onClick={() => handleMessage}>
                        <i className="bi bi-caret-right-fill"></i></button>
                </div>
            </form>
        </>
    )
}


export default translationForm

// setMessage(TEXT)