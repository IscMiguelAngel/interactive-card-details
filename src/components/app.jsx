import bg_card_back from "../assets/bg-card-back.png" 
import bg_card_front from "../assets/bg-card-front.png"
import logo_card_front from "../assets/card-logo.svg"
import "../stylesheets/styles.scss"

export const App = () => {
    return (
        <>
        <header className="header">
            <div className="cards">
                <div className="card card-back">
                    <span id="cvc-text">000</span>
                    <img className="card-img" src={ bg_card_back } alt="Card back" />
                </div>
                <div className="card card-front">
                    <img className="card-logo" src={ logo_card_front } alt="Logo Card" />
                    <img className="card-img" src={ bg_card_front } alt="Card front" />
                    <span id="number-text">0000 0000 0000 0000</span>
                    <span id="name-text">JANE APPLESEED</span>
                    <span id="mm-yy-text">00/00</span>
                </div>
            </div>
        </header>
        <main className="main">
            <form id="form-card">
                <div className="form-input">
                    <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
                    <input type="text" id="cardholder-name" placeholder="e.g. Jane Appleseed" />
                </div>
                <div className="form-input">
                    <label htmlFor="card-number">CARDHOLDER card-number</label>
                    <input type="text" id="card-number" placeholder="e.g. 1234 5678 9123 0000" />
                </div>
                <div className="form-input-flex">
                    <div className="form-input">
                        <label htmlFor="mm-yy">EXP. DATE (MM/YY)</label>
                        <div className="form-input-flex">
                            <input type="text" id="card-mm" placeholder="MM" />
                            <input type="text" id="card-yy" placeholder="YY" />
                        </div>
                    </div>
                    <div className="form-input">
                        <label htmlFor="cvc">CVC</label>
                        <input type="text" id="cvc" placeholder="e.g. 123" />
                    </div>
                </div>
            </form>
        </main>
        </>
     )
 }