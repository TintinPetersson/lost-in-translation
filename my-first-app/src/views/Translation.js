import withAuth from "../hoc/withAuth"
import TranslationWindow from "../components/Translations/TranslationsWindow"
import TranslationForm from "../components/Translations/TranslationForm"
import { useState } from "react";

const Translation = () => {
    const [message, setMessage] = useState("Hello");

    return (
        <>
            <section id="translations-options">
                <TranslationForm setMessage={setMessage}  />
                <TranslationWindow message={message} />
            </section>
            <div className="robot-image">
                <img src='img/Logo-Hello.png'
                    className='img-fluid imgs'
                    alt='robot' />
            </div>
        </>
    )
}

export default withAuth(Translation)