import ListaItems from "./components/ListaItems";
import FormItems from "./components/FormItems"
import {useState} from 'react'
import "./App.css"
function App() {

  const initialState = {
    id:0,
    text:"hola como estas?",
    editar:false,
  }

  const [state, setState] = useState([initialState])

  const agregarTarea = event => {
    event.preventDefault()
    

    if(event.target.tarea.value !== ""){

      const newTodoo = {
      id: Math.random(),
      text:event.target.tarea.value,
      editar:false
    }

    
    setState([...state, newTodoo  ])
    }else {
    console.log('hola')
  }
    
    event.target.tarea.value = ""
  } 

  

  return (
    <div className="App">
      <ListaItems 
      setState = {setState}
      state ={state}
      ></ListaItems>
      <FormItems
      agregarTarea={agregarTarea}
      ></FormItems>
    </div>
  );
}

export default App;
