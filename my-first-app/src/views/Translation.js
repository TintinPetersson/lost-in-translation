import withAuth from "../hoc/withAuth"
import TranslationsButton from "../components/Translations/TranslationsButton"

const Translation = () => {
    return (
        <>
            <h1>Translation page</h1>
            <section id="translations-options">
                <TranslationsButton word="Sign" images="img/w.png" />
            </section>
        </>
    )
}

export default withAuth(Translation)