const FormItems = ({agregarTarea}) =>{
    return(
        <form onSubmit={agregarTarea}>
            <input name="tarea" type="text" />
            <button>Agregar</button>
        </form>
    )
}

export default FormItems;