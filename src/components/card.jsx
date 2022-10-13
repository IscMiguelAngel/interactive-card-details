const Card = (props) => {

    if(props.isActiv) {
        let card = document.getElementsByClassName(`card-${ props.type }`);
        if(card) {
            card.class
        }
    }

    return (
        <div className={`card card-${ props.type } ${ props.isActive ? "active" : "" }`}>

            { props.children }

        </div>
    )
}

export default Card