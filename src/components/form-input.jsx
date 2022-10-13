import { useState } from "react"

const FormInput = ({ id, label, placeholder, value, keyUp, focus, frontActive }) => {

    const [active, setActive] = useState(false);
    
    const input = document.getElementById(id)

    if(input) {
        input.addEventListener("focus", () => {
            setActive(true)
            if(focus === "front")
                frontActive(true)
            else
                frontActive(false)
        })
    
        input.addEventListener("blur", () => {
            if(input.value === "") {
                setActive(false)
                input.parentElement.classList.add("required")
            } else {
                input.parentElement.classList.remove("required")
            }
            
            if(focus === "front")
                frontActive(true)
            else
                frontActive(false)
        })
    }

    return (
        <div className={`form-input ${ active ? "active" : "" }`}>
            <label htmlFor={ id }>{ label }</label>
            <input type="text" id={ id } value={ value } placeholder={ placeholder } onChange={ keyUp } autoComplete="off" />
        </div>
    )
}

export default FormInput