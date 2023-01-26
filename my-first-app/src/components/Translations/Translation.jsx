import withAuth from "../../utils/withAuth"
import TranslationWindow from "./TranslationsWindow"
import TranslationForm from "./TranslationForm"
import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter'

const Translation = () => {
    const [message, setMessage] = useState("hello");


    return (
        <div className="container pt-5">
            <h4 className="fw-bolder fst-italic translation-header">
                <span>
                    <Typewriter
                        words={["Text to sign language"]}
                        loop={3}
                        cursor
                        cursorStyle='_'
                        typeSpeed={150}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h4>

            <div className="row justify-content-center pt-5" id="translations-options">
                <div className="col-lg-4 bg-dark p-1 rounded-pill">
                    <TranslationForm setMessage={setMessage} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <TranslationWindow message={message} />
                </div>
            </div>
        </div >
    )
}

export default withAuth(Translation)