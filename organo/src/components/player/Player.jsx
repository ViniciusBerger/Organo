import "./Player.css"
export const Player = ({primaryColor, name, number, image})=> {
    return (
        <div className="Player">
            <div className="header" style={{backgroundColor: primaryColor}}>
                <img src={image} alt="player registered" />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{number}</h5>
            </div>
        </div>
    )
}