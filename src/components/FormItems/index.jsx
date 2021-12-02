import "./FormItems.css"

const FormItems = ({agregarTarea}) =>{
    return(
        <form className="form" onSubmit={agregarTarea}>
            <h2 htmlFor="tarea">Nueva Tarea</h2>
            <input placeholder="Nuevo Todoo" name="tarea" type="text" />
            <button>Agregar</button>
        </form>
    )
}

export default FormItems;