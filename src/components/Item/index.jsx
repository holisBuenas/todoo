import "./Item.css"

const Item = ({text,state,id,setState}) =>{
    const eliminarTarea = (event) =>{

        
        const elemento = state.filter(element =>{
            return(parseFloat(element.id) !== parseFloat(event.target.id))
        })
       setState(elemento) 
  }


//   const modificarTarea = (event) =>{
//       console.log(event.target.id)
//       const tareasModificadas = state.map( element =>{
//           if(element.id === parseFloat(event.target.id)){
//             element.editar = !element.editar;
//           }
//       })
      
//   }
    return(
        <div className="item">
            <div>
                {text}
            </div>
            {/* <button id={id} onClick ={modificarTarea} >Modificar</button> */}
            <button id={id} onClick={eliminarTarea}>Eliminar</button>
        </div>
    )
}

export default Item;