import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <div className="container mt-3">
      <NavBar />

      <Routes>
        <Route 
        path="/tasks/new"
        element={
          <ProtectedRoute>
            <CreateTask />
          </ProtectedRoute>
        }
      />
        <Route
        path="/tasks/:id"
        element={
          <ProtectedRoute>
            <TaskDetails />
          </ProtectedRoute>
        }
      />
        <Route
        path="/tasks/:id/edit"
        element={
          <ProtectedRoute>
            <EditTask />
          </ProtectedRoute>
        }
      />

        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
