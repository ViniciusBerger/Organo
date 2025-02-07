import "./DropDownList.css"

export const DropDownList = (props)=>{
  
    return (
        <div className="DropDownList">
            <label> {props.label}</label>
            <select value = {props.value} onChange = {(event)=>{props.onChanged(event.target.value)}}>
                <option value=""></option>
                {props.items.map(item=> <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}


