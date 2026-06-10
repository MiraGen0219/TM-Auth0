import { createContext } from "react";
import type { Task } from "../types/Task";

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: number) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);