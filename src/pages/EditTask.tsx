import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { TaskStatus } from "../types/Task";
import { useTasks } from "../context/useTasks";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTasks();

  const task = tasks.find((task) => task.id === Number(id));

  const [title, setTitle] = useState<string>(task?.title || "");
  const [description, setDescription] = useState<string>(task?.description || "");
  const [status, setStatus] = useState<TaskStatus>(task?.status || "Pending");
  const [dueDate, setDueDate] = useState<string>(task?.dueDate || "");
  const [error, setError] = useState<string>("");

  if (!task) {
    return <h1>Task Not Found</h1>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }

    if (!dueDate) {
      setError("Due date is required.");
      return;
    }

    updateTask({
      id: task.id,
      title,
      description,
      status,
      dueDate,
    });

    navigate(`/tasks/${task.id}`);
  };

  return (
    <div>
      <h1>Edit Task</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <button className="btn btn-primary me-2" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditTask;