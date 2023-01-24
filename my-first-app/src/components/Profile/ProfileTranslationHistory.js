import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {


    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={index + "-" + translation} translation={translation} />)

    return (
        <div className="col-md-4">
            {!translations.length > 0 &&
                <p className="pt-5"><span className="p-2 rounded fst-italic bg-dark">No earlier translations</span></p>
            }
            {translations.length > 0 &&
                <p className="pt-5"><span className="p-2 rounded fst-italic bg-dark">Your translation history</span></p>
            }
            <ul className="list-group list-group pt-4 pb-5">
                {translationList}
            </ul>
        </div>
    )
}

export default ProfileTranslationHistory