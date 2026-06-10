# 📋 Task Management App

A modern task management application built with **React**, **TypeScript**, **Auth0**, and **React Router**. Users can securely authenticate with Auth0, manage tasks through a full CRUD workflow, and interact with a responsive user interface powered by Bootstrap.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* Auth0 integration for secure authentication
* GitHub social login support
* Protected routes for authenticated users
* User profile page displaying Auth0 user information

### 📋 Task Management

* View all tasks in a dashboard
* Create new tasks
* View task details
* Edit existing tasks
* Delete tasks with confirmation prompts

### 🛡️ Validation & Error Handling

* Required field validation
* User-friendly error messages
* Protected route access control
* Type-safe form handling with TypeScript

### ⚡ State Management

* React Context API for global task state
* Custom React hooks
* Typed React state management

---

## 🛠️ Technologies Used

| Technology      | Purpose                           |
| --------------- | --------------------------------- |
| ⚛️ React        | Frontend UI                       |
| 🔷 TypeScript   | Type safety and maintainability   |
| 🔐 Auth0        | Authentication & authorization    |
| 🧭 React Router | Client-side routing               |
| 🎨 Bootstrap    | Responsive styling                |
| 🪝 React Hooks  | State and lifecycle management    |
| 🌐 Vite         | Build tool and development server |

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── NavBar.tsx
│   └── ProtectedRoute.tsx
│
├── context/
│   ├── task-context.ts
│   ├── TaskProvider.tsx
│   └── useTasks.ts
│
├── pages/
│   ├── Home.tsx
│   ├── Tasks.tsx
│   ├── CreateTask.tsx
│   ├── EditTask.tsx
│   ├── TaskDetails.tsx
│   └── Profile.tsx
│
├── types/
│   └── Task.ts
│
├── App.tsx
└── main.tsx
```

---

## 🔑 Authentication

Authentication is powered by Auth0.

Features include:

* GitHub social login
* Protected routes
* User profile display
* Session management

Example protected route:

```tsx
<Route
  path="/tasks"
  element={
    <ProtectedRoute>
      <Tasks />
    </ProtectedRoute>
  }
/>
```

---

## 📚 TypeScript Features

This project uses TypeScript throughout the application to improve reliability and maintainability.

### Task Interface

```ts
export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
}
```

### Typed State

```ts
const [tasks, setTasks] = useState<Task[]>([]);
```

### Typed Context

```ts
interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}
```

---

## 🌍 Application Pages

### 🏠 Home

Landing page for the application.

### 📋 Task Dashboard

Displays all tasks and provides:

* Details button
* Edit button
* Delete button
* Create New Task button

### ➕ Create Task

Allows users to create new tasks with validation.

### ✏️ Edit Task

Allows users to modify existing tasks.

### 🔍 Task Details

Displays complete task information.

### 👤 Profile

Displays Auth0 user information including:

* Profile image
* Username
* Authentication data

---

## 🎯 Learning Objectives Demonstrated

This project demonstrates:

* React component architecture
* TypeScript integration
* React Router navigation
* Context API state management
* Custom hooks
* Authentication with Auth0
* Protected routes
* Form handling
* Validation and error handling
* CRUD application design

---

## 💡 Lessons Learned

During development, several important React and TypeScript concepts were reinforced:

* Configuring Auth0 authentication in React applications
* Implementing protected routes with React Router
* Managing global state with the Context API
* Creating reusable custom hooks
* Working with TypeScript interfaces and type aliases
* Debugging React component and routing issues
* Building type-safe forms and validation workflows
* Structuring scalable React applications

One particularly valuable lesson was learning how to combine **React Context**, **custom hooks**, and **TypeScript** to create maintainable shared state across multiple pages.

---

## ▶️ Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```


