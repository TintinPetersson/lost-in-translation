// Transfer to the profile page where users 10 prior translations are displayed
const TranslationsButton = () => {
    return (
        <>
            <button onClick={() => console.log("send to API")}>
                <b>Translations</b>
            </button>
        </>
    )
}

// Translates the user inputs
// Render the the translated massage that the user inputs
// in the TranslationsForm 
const TranslateWordToSigns = (word) => {
    // TODO: Replace this array with folder  

    let listOfSignImgs = ["x.png", "y.png", "w.png", "z.png"];
    let selectedSignImgs = []
    // TODO: loop over the sign images in img folder!
    for (const char of word.word) {
        for (const img of listOfSignImgs) {
            // TODO: Add function to lower and 
            if (char === img[0]) selectedSignImgs.push(img);
        }
    }
    return (
        <>
            <div>
                {selectedSignImgs.map((sign) => (
                    <img src={`img/${sign}`} alt={"sign"} width="55" />))}
            </div>
        </>
    );
}

const translationWindow = () => {
    // TODO:  on translateForm button
    return (
        <>
            <div className="container pt-5">
                <div className="row justify-content-center text-center pt-5">
                    <div className="col-md-12 pt-1">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-xl primary">
                                    <div className="signs">
                                        {<TranslateWordToSigns word="xy,,,,ezw" />}
                                    </div>
                                    <TranslationsButton />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default translationWindow
