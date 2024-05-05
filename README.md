

# Todo List API

This is a RESTful API for managing tasks in a todo list. It's built using Node.js for the server-side environment and Express.js as the web application framework. The API allows users to perform various operations such as viewing, adding, updating, and deleting tasks.

## Technologies Used

- **Node.js**: A runtime environment for executing JavaScript code outside of a web browser, allowing us to build server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
- **JavaScript (ES6+)**: The primary programming language used for both server-side and client-side development.
- **npm**: The package manager for Node.js used to manage project dependencies and scripts.
- **nodemon**: A utility tool that monitors for changes in the code and automatically restarts the server when changes are detected, making the development process more efficient.
- **uuid**: A library used to generate unique identifiers for tasks.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/vennisabarfi/todo_api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

### 1. Setting up Homepage

The root route '/' welcomes users to the Todo List API.

### 2. View Tasks

The API provides a route to view all tasks:

    ```
    GET /viewtasks
    ```

### 3. Add New Tasks

To add new tasks, use the following route:

    ```
    POST /addtasks
    ```

### 4. Delete Tasks

To delete tasks, use the following route with the task id:

    ```
    DELETE /removetasks/:id
    ```

### 5. Update Tasks

To update tasks, use the following route with the original task name and the updated task name:

    ```
    PUT /updatetasks/:task/:update
    ```

## Scripts

- `npm run dev`: Start the server using nodemon for automatic restart on code changes.

## Contributors

- [Vennisa Barfi](https://github.com/vennisabarfi) 

## License

This project is licensed under the [MIT License](LICENSE).

