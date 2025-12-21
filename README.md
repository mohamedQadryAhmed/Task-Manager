# Task Manager API

## 📌 Overview
Task Manager is a simple project for managing tasks using **Node.js**, **Express**, and **MongoDB**.  
It provides a RESTful API to create, read, update, and delete tasks.

---

## 🚀 Features
- Create new tasks (CRUD operations)
- Retrieve all tasks or a single task
- Update existing tasks
- Delete tasks
- Centralized error handling with middleware
- Environment variable support using dotenv

---

## 🛠️ Tech Stack
- **Node.js** + **Express**: REST API framework
- **MongoDB** + **Mongoose**: Database and ODM
- **dotenv**: Environment configuration
- **Swagger (coming soon)**: API documentation

---

## ⚙️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/task-manager.git
   cd task-manager

2. Install dependencies:
    ```bash
    npm install

3. Create a .env file:
    ```bash
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/taskmanager

4. Start the server:
    ```bash
    npm start

---

## 📡 API Endpoints
### Tasks
| Method | Endpoint       | Description           | Status Codes |
|--------|----------------|-----------------------|--------------|
| GET    | /tasks         | Get all tasks         | 200, 500     |
| GET    | /tasks/:id     | Get a single task     | 200, 404, 500|
| POST   | /tasks         | Create a new task     | 201, 400, 500|
| PUT    | /tasks/:id     | Update a task         | 200, 404, 400, 500|
| DELETE | /tasks/:id     | Delete a task         | 200, 404, 500|

---

## 🧪 Future Work
1. Add a simple GUI using React.
2. Document APIs with Swagger.
3. Add unit and integration tests.