import { useContext } from "react";
import { TaskContext } from "./task-context";

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used inside a TaskProvider");
  }

  return context;
}