import Item from "../Item"

const ListaItems = ({state,setState}) =>{
    return(
        <div>
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