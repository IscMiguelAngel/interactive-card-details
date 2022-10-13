import Button from "./button"

const Alert = ({ isShow }) => {
    return (
        <>
        <div className={`backdrop ${ isShow ? "show" : "" }`}></div>
        <div className={`alert ${ isShow ? "show" : "" }`}>
            <div className="alert-header"></div>
            <div className="alert-body">
                <div className="icon">
                    <span>&#10004;</span>
                </div>
                <div className="text">
                    <p>Card Details sent success</p>
                </div>
            </div>
            <div className="alert-footer">
                <Button action="continue">Continue</Button>
            </div>
        </div>
        </>
    )
}

export default Alert