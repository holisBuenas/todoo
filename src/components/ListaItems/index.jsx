import Item from "../Item"
import "./ListaItems.css"

const ListaItems = ({state,setState}) =>{
    return(
        <div className="listItems">
           {state.map((item)=>{
               return(
                   <Item
                   key = {item.id}
                    text = {item.text}
                    id = {item.id}
                    state = {state}
                    setState = {setState}
                  ></Item>
               )
           })}
        </div>
    )
}

export default ListaItems