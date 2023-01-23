import withAuth from "../hoc/withAuth"
import TranslationWindow from "../components/Translations/TranslationsWindow"
import TranslationForm from "../components/Translations/TranslationForm"

const Translation = () => {
    return (
        <>
            <h1>Translation page</h1>
            <section id="translations-options">
                <TranslationForm />
                <TranslationWindow />
            </section>
        </>
    )
}

export default withAuth(Translation)