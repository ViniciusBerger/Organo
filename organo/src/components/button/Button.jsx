import "./Button.css"
export const Button = (props)=>{
    return (
        <div className="Button">
            <button>{props.content}</button>
        </div>
    )
}