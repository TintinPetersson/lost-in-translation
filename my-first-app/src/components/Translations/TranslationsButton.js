const TranslationsButton = ({ word, images }) => {
    return (
        <button>
            <aside>
                <img src={images} alt={word} width="55" />
            </aside>
            <section>
                <b>{word}</b>
            </section>
        </button>
    )
}
export default TranslationsButton