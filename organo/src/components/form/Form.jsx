import { useState } from "react"
import "./Form.css"
import { TextLabel } from "../textLabel/TextLabel"
import { DropDownList } from "../dropDownList/DropDownList"
import { Button } from "../button/Button"


export const Form = (props)=> {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [number, setNumber] = useState("");
    const [image, setImage] = useState("");

    const save = (event)=>{
        event.preventDefault()
        props.onPlayerAdded({
            name,
            number,
            image,
            position
    })
    setName('')
    setImage('')
    setPosition('')
    setNumber('')
    }

    return (
        <div className="Form">
            <form onSubmit={save}>
            <TextLabel 
                label='Name' 
                placeholder = 'enter your name'
                value = {name}
                onChanged = {value=> setName(value)}
            />
            <DropDownList 
                label='Position' 
                items = {props.positions}
                value = {position}
                onChanged = {value =>setPosition(value)}
            />
            <TextLabel 
                label='Number' 
                placeholder = 'enter your number'
                value = {number}
                onChanged = {value=>setNumber(value)}
            />
            <TextLabel 
                label='image' 
                placeholder = 'enter your image'
                value = {image}
                onChanged = {value=>setImage(value)}
            />
            <Button content="Submit"/>
            </form>
        </div>
    )
}