import { useState } from "react"
import bg_card_back from "../assets/bg-card-back.png" 
import bg_card_front from "../assets/bg-card-front.png"
import logo_card_front from "../assets/card-logo.svg"
import "../stylesheets/styles.scss"
import Button from "./button"
import Card from "./card"
import FormInput from "./form-input"
import Alert from "./alert"

export const App = () => {

    const [cardNumber, setCardNumber] = useState("");
    const [cardholderName, setCardholderName] = useState("");
    const [cardMM, setCardMM] = useState("");
    const [cardYY, setCardYY] = useState("");
    const [cardCVC, setCardCVC] = useState("");
    const [frontActive, setFrontActive] = useState(true);
    const [backActive, setBackActive] = useState(false);
    const [completeForm, setCompleteForm] = useState(false)

    const changeCardNumber = (e) => {

        let number = e.target.value
        if(number.length <= 19) {
            number = number
                                .replace(/\s/g, "")
                                .replace(/\D/g, "")
                                .replace(/([0-9]{4})/g, "$1 ")
                                .trim()

            setCardNumber(number)
        }
    }

    const changeCardholderName = (e) => {
        let name = e.target.value.toString()
        if(name.length <= 27) {
            name = name.replace(/[0-9]/g, "")

            setCardholderName(name)
        }
    }

    const changeCardMM = (e) => {
        let mm = e.target.value.toString()
        if(mm.length <= 2) {
            mm = mm.replace(/\s/g, "").replace(/\D/g, "").replace([0-9])

            setCardMM(mm)
        }
    }

    const changeCardYY = (e) => {
        let yy = e.target.value.toString()

        if(yy.length <= 2) {
            yy = yy.replace(/\s/g, "").replace(/\D/g, "").replace([0-9])

            setCardYY(yy)
        }
    }

    const changeCardCVC = (e) => {
        let cvc = e.target.value.toString()

        if(cvc.length <= 4) {
            cvc = cvc.replace(/\s/g, "").replace(/\D/g, "").replace([0-9])

            setCardCVC(cvc)
        }
    }

    const changeActiveFront = (active) => {
        if(active){
            setFrontActive(true);
            setBackActive(false);
        }
        else {
            setFrontActive(false);
            setBackActive(true);
        }
    }

    return (
        <>
        <header className="header">
            <div className="cards">
                <Card type="front" isActive={ frontActive }>
                    <img className="card-logo" src={ logo_card_front } alt="Logo Card" />
                    <img className="card-img" src={ bg_card_front } alt="Card front" />
                    <span id="number-text">{ cardNumber !== "" ? cardNumber : "0000 0000 0000 0000"  }</span>
                    <span id="name-text">{ cardholderName !== "" ? cardholderName : "your name here" } </span>
                    <div className="card-mm-yy">
                        <span id="mm-text">{ cardMM !== "" ? cardMM : "00" }</span>
                        <span>/</span>
                        <span id="yy-text">{ cardYY !== "" ? cardYY : "00" }</span>
                    </div>
                </Card>
                <Card type="back" isActive={ backActive }>
                    <span id="cvc-text">{ cardCVC !== "" ? cardCVC : "000" }</span>
                    <img className="card-img" src={ bg_card_back } alt="Card back" />
                </Card>
            </div>
        </header>
        <main className="main">
            <form id="form-card">
                <h1>CARD DETAILS</h1>

                <FormInput id="cardholder-name" label="CARDHOLDER NAME" placeholder="Jane Appleseed" value={ cardholderName} keyUp={ changeCardholderName } focus="front" frontActive={ changeActiveFront } />
                <FormInput id="card-number" label="CARD NUMBER" placeholder="1234 5678 9123 0000" value={ cardNumber} keyUp={ changeCardNumber } focus="front" frontActive={ changeActiveFront } />
                <div className="form-input-flex">
                    <div className="form-input-flex w-50">
                        <FormInput id="mm" label="MM" placeholder="12" value={ cardMM} keyUp={ changeCardMM } focus="front" frontActive={ changeActiveFront } />
                        <FormInput id="yy" label="YY" placeholder="22" value={ cardYY} keyUp={ changeCardYY } focus="front" frontActive={ changeActiveFront } />
                    </div>
                    <div className="form-input-flex w-50">
                        <FormInput id="cvc" label="CVC" placeholder="0000" value={ cardCVC} keyUp={ changeCardCVC } focus="back" frontActive={ changeActiveFront } />
                    </div>
                </div>
                <Button action="confirm" isShow={ setCompleteForm }>Confirm</Button>
            </form>
        </main>
        <Alert isShow={ completeForm } />
        </>
     )
 }