const Button = (props) => {
    const submit = (e) => {
        if(props.action == "confirm") {
            const cardNumber = document.getElementById("card-number")
            const cardholderName = document.getElementById("cardholder-name")
            const cardMM = document.getElementById("mm")
            const cardYY = document.getElementById("yy")
            const cardCVC = document.getElementById("cvc")
    
            if(cardholderName.value.trim() != "") {
                if(cardNumber.value.trim() != "") {
                    if(cardMM.value.trim() != "") {
                        if(cardYY.value.trim() != "") {
                            if(cardCVC.value.trim() != "") {
                                props.isShow(true)
                            } else {
                                cardCVC.parentElement.classList.add("required")
                                cardCVC.focus()
                            }
                        } else {
                            cardYY.parentElement.classList.add("required")
                            cardYY.focus()
                        }
                    } else {
                        cardMM.parentElement.classList.add("required")
                        cardMM.focus()
                    }
                } else {
                    cardNumber.parentElement.classList.add("required")
                    cardNumber.focus()
                }
            } else {
                cardholderName.parentElement.classList.add("required")
                cardholderName.focus()
            }
        } else
            window.location.reload()

        e.preventDefault()
    }

    return (
        <button type="submit" className="btn btn-confirm" onClick={ submit }>{ props.children }</button>
    )
}

export default Button