import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button'


// Transfer to the profile page where users 10 prior translations are displayed
const TranslationsButton = ({ message }) => {
    return (
        <>
            <Button variant="Secondary">
                <NavLink className="nav-link bold text-light" to="/profile">Translations</NavLink>
            </Button>
        </>
    )
}

// Translates the user inputs
// Render the the translated massage that the user inputs
// in the TranslationsForm 
const TranslateWordToSigns = ({ word }) => {
    const listOfChars = word.replace(/[^A-Z]+/ig, "").split("");

    return (
        <>
            <div>
                {listOfChars.map((char) => (
                    <img src={`img/${char}.png`} alt={"sign"} key={`${char}${Math.random()}`} width="55" />))}
            </div>
        </>
    );
}

const translationWindow = ({ message }) => {

    return (
        <div className="container pt-5">
            <div className="row justify-content-center text-center pt-5">
                <div className="col-md-12 pt-1">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-xl primary">
                                <div className="char">
                                    {<TranslateWordToSigns word={message} />}
                                </div>
                                <TranslationsButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default translationWindow
