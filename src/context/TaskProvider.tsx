import { useState } from "react";
import type { ReactNode } from "react";
import type { Task } from "../types/Task";
import { TaskContext } from "./task-context";

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Complete React Assignment",
      description: "Finish the Auth0 task management app.",
      status: "In Progress",
      dueDate: "2026-06-15",
    },
    {
      id: 2,
      title: "Review TypeScript",
      description: "Practice interfaces and typed hooks.",
      status: "Pending",
      dueDate: "2026-06-20",
    },
  ]);

  const addTask = (task: Task) => {
    setTasks((currentTasks) => [...currentTasks, task]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}