// TODO: Detach and remove this component 

const TranslationsButton = ({ word, images }) => {
    // Send the translation message that the user have inputted 
    // in to the TranslationForm to our Glitch API and the to 
    // the TranslationsWindow to display translation
    const sendTranslation = (word) => {
        console.log(word);
    }
    return (
        <button onClick={() => sendTranslation({ word })}>
            <section>
                <b>Translate</b>
            </section>
        </button>
    )
}
export default TranslationsButton


/*
    <aside>
        <img src={images} alt={word} width="55" />
    </aside>
 */