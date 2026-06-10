import { Link, useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/useTasks";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask } = useTasks();

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return (
      <div>
        <h1>Task Not Found</h1>
        <Link to="/tasks" className="btn btn-secondary">
          Back to Tasks
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
    deleteTask(task.id);
    navigate("/tasks");
   }
  };

  return (
    <div>
      <h1>Task Details</h1>

      <div className="card">
        <div className="card-body">
          <h3>{task.title}</h3>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Status:</strong> {task.status}</p>
          <p><strong>Due Date:</strong> {task.dueDate}</p>

          <Link className="btn btn-warning me-2" to={`/tasks/${task.id}/edit`}>
            Edit Task
          </Link>

          <button className="btn btn-danger me-2" onClick={handleDelete}>
            Delete Task
          </button>

          <Link className="btn btn-secondary" to="/tasks">
            Back to Tasks
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;