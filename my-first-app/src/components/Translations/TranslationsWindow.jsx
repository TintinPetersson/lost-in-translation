import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button'

// Translates the user inputs
// Render the the translated massage that the user inputs
// in the TranslationsForm 
const TranslateWordToSigns = ({ word }) => {
    let listOfChars = word.replace(/[^A-Z]+/ig, "").split("");

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
                                <div className="fw-bolder text-muted pb-3 pt-2">
                                    <span>"{message}"</span>
                                </div>
                                <div className="char">
                                    {<TranslateWordToSigns word={message} />}
                                </div>
                                <Button variant="Secondary pt-5 text-muted">
                                    <NavLink id="link-profile" className="nav-link bg-dark p-1 rounded" to="/profile">Go to Translations</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default translationWindow
