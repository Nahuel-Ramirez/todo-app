import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useFormulario } from "../hooks/useFormulario";
import "../styles/formulario.css";

export default function Formulario({ agregarTodo }) {
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: false,
  };

  const [inputs, handleChange, reset] = useFormulario(initialState);

  const { nombre, descripcion, estado, prioridad } = inputs;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nombre.trim()) {
      event.target[0].focus();
      Swal.fire({
        title: "Error",
        text: "No deje el nombre en blanco",
        icon: "error",
      });
      return;
    }
    if (!descripcion.trim()) {
      event.target[1].focus();
      Swal.fire({
        title: "Error",
        text: "No deje la descripcion en blanco",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Exito",
      text: "Tarea agregada",
      icon: "success",
    });
    agregarTodo({
      nombre,
      descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad,
      id: uuidv4(),
    });

    reset();
  };

  return (
    <>
      <div className="form-header">
        <h3>Agregue su tarea</h3>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="formulario">
          <input
            type="text"
            className="form-control mb-3"
            name="nombre"
            placeholder="Ingrese nombre de la tarea..."
            value={nombre}
            onChange={handleChange}
          />
          <textarea
            className="form-control mb-3"
            name="descripcion"
            placeholder="Ingrese descripcion de la tarea..."
            rows={5}
            value={descripcion}
            onChange={handleChange}
          />

          <select
            name="estado"
            className="form-control mb-2"
            value={estado}
            onChange={handleChange}
          >
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
          </select>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              name="prioridad"
              checked={prioridad}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Prioritario
            </label>
          </div>
          <div className="btn-container">
            <button type="submit" className="btn-todo">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
