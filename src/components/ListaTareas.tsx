import { Tarea } from "./Tarea"

type ListaProps = {
    listaTareas: string[]
    borrarTarea: (index: number) => void
}

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaProps) => {
    return (
        <div className="taskList">
            {listaTareas.map((tarea, index) => (
                <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
            )
            )}
        </div>
    )
}