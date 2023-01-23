import withAuth from "../hoc/withAuth"
import TranslationWindow from "../components/Translations/TranslationsWindow"
import TranslationForm from "../components/Translations/TranslationForm"
import { useState } from "react"

const Translation = () => {
    const [ message, setMessage ] = useState("hello");
    return (
        <>
            <h1>Translation page</h1>
            <section id="translations-options">
                <TranslationForm message = {message} setMessage = {setMessage} />
                <TranslationWindow message = {message} />
            </section>
        </>
    )
}

export default withAuth(Translation)