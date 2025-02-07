import { Player } from "../player/Player"
import "./Positions.css"
export const Positions= (props) =>{
    return (
       props.players.length > 0 && <div className="Positions" style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.position}</h3>
            <div className="PositionConteiner">
                {props.players.map(player => <Player
                                                key={player.name} 
                                                primaryColor = {props.primaryColor} 
                                                name={player.name} 
                                                position={player.position} 
                                                number = {player.number} 
                                                image={player.image}/>)}
            </div>
        </div>
    )
}