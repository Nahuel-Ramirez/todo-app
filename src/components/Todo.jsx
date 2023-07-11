import "../styles/todo.css";

export default function Todo({ todo, eliminarTodo, editarTodo }) {
  const { id, nombre, descripcion, estado, prioridad } = todo;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start list-todo">
      <div className="ms-2 me-auto todo-container">
        <div className="fw-bold">
          {nombre} ({estado ? "Finalizado" : "Pendiente"})
        </div>
        <p>{descripcion}</p>
        <div>
          <button
            className="btn btn-eliminar me-2"
            onClick={() => {
              eliminarTodo(id);
            }}
          >
            Eliminar
          </button>
          <button
            className="btn btn-editar"
            onClick={() => {
              editarTodo(id);
            }}
          >
            Editar
          </button>
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">
        {prioridad && "Prioritario"}
      </span>
    </li>
  );
}
