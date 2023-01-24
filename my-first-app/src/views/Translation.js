import withAuth from "../hoc/withAuth"
import TranslationWindow from "../components/Translations/TranslationsWindow"
import TranslationForm from "../components/Translations/TranslationForm"
import { useState } from "react";
import { useUser } from "../context/UserContext";


const Translation = () => {
    const [message, setMessage] = useState("Hello");

    return (
        <>
            <h1>Translation page</h1>
            <section id="translations-options">
                <TranslationForm setMessage={setMessage} />
                <TranslationWindow message={message} />
            </section>
        </>
    )
}

export default withAuth(Translation)