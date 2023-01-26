const ProfileTranslationHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation) => <li className="list-group-item bg-dark text-light m-1 rounded fst-italic" key={`${Math.random()}`}>{translation}</li>)

    return (
        <div className="col-md-4">
            {!translations.length > 0 &&
                <p className="pt-3"><span className="p-2 rounded bg-dark">No earlier translations</span></p>
            }
            {translations.length > 0 &&
                <p className="pt-3"><span className="p-2 rounded bg-dark">Your translation history</span></p>
            }
            <ul className="list-group list-group pt-4 pb-5">
                {translationList}
            </ul>
        </div>
    )
}

export default ProfileTranslationHistory