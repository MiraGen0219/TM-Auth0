import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { TaskStatus } from "../types/Task";
import { useTasks } from "../context/useTasks";

function CreateTask() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<TaskStatus>("Pending");
  const [dueDate, setDueDate] = useState<string>("");
  const [error, setError] = useState<string>("");

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

    addTask({
      id: Date.now(),
      title,
      description,
      status,
      dueDate,
    });

    navigate("/tasks");
  };

  return (
    <div>
      <h1>Create Task</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
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

        <button className="btn btn-primary" type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;