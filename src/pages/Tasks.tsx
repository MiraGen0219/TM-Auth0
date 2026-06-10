import { Link } from "react-router-dom";
import { useTasks } from "../context/useTasks";

function Tasks() {
  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Task Dashboard</h1>

        <Link className="btn btn-success" to="/tasks/new">
          Create New Task
        </Link>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <div className="list-group">
          {tasks.map((task) => (
            <div key={task.id} className="list-group-item">
              <h5>{task.title}</h5>
              <p>Status: {task.status}</p>
              <p>Due: {task.dueDate}</p>

              <Link className="btn btn-primary btn-sm me-2" to={`/tasks/${task.id}`}>
                Details
              </Link>

              <Link className="btn btn-warning btn-sm me-2" to={`/tasks/${task.id}/edit`}>
                Edit
              </Link>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                    if (window.confirm("Are you sure you want to delete this task?")) {
                        deleteTask(task.id);
                    }
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tasks;