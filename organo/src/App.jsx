import { useState } from 'react'
import { Form } from './components/form/Form'
import { Banner } from './components/banner/Banner'
import './App.css'
import { Positions } from './components/positions/Positions'
import { Footer } from './components/footer/Footer'


function App() {
  const [players, setPlayers] = useState([])
  const addPlayerList= (player=>{
    setPlayers([...players, player])
    console.log(players)
  })

  const positions = [
    {
      name:"ST",
      primaryColor:"#57c278",
      secondaryColor:"#d9f7e9"
    },
    {
      name:"LD",
      primaryColor:"#82cffa",
      secondaryColor:"#e8f8ff"
    },
    {
      name:"LW/RW",
      primaryColor:"#a6d157",
      secondaryColor:"#f0f8e2"
    },
    {
      name:"RD",
      primaryColor:"#e06b69",
      secondaryColor:"#fde7e8"
    },
    {
      name:"CAM/CM",
      primaryColor:"#db6ebf",
      secondaryColor:"#fde7e8"
    },
    {
      name:"CDM",
      primaryColor:"#ffba05",
      secondaryColor:"#fae9f5"
    },
    {
      name:"CB",
      primaryColor:"#ff8a29",
      secondaryColor:"#ffeedf"
    }
  ]
  
  return (
   <div>
      <Banner/>
      <Form onPlayerAdded = {player=> addPlayerList(player)} positions = {positions.map(time=> time.name)}/>

      {positions.map(position=><Positions 
                                  key = {position.name} 
                                  position={position.name} 
                                  primaryColor={position.primaryColor} 
                                  secondaryColor={position.secondaryColor} 
                                  players = {players.filter(player=> player.position === position.name)}
                                  />)}
      <Footer/>
   </div>
    
  )
}

export default App
