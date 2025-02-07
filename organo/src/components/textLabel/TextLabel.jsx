import "./TextLabel.css"
export const TextLabel = (props) => {
    
    return (
        <div className="TextLabel">
            <label>{props.label}</label>
            <input value={props.value} onChange ={(event)=>{props.onChanged(event.target.value)}} type="text" placeholder={props.placeholder}></input>
        </div>
    )
}