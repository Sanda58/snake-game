# Snake Game

This project is a web-based Snake Game using React for the frontend and Flask for the backend.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)
- [Python](https://www.python.org/)

## Backend Setup (Flask)

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/snake-game.git
    cd snake-game/backend
    ```

2. **Create and activate a virtual environment:**

    - **Command Prompt:**
      ```sh
      python -m venv venv
      venv\Scripts\activate
      ```

    - **PowerShell:**
      ```sh
      python -m venv venv
      .\venv\Scripts\Activate.ps1
      ```

3. **Install dependencies:**

    ```sh
    pip install -r requirements.txt
    ```

4. **Run the Flask server:**

    ```sh
    python app.py
    ```

    The Flask server should now be running at `http://127.0.0.1:5000`.

## Frontend Setup (React)

1. **Navigate to the frontend directory:**

    ```sh
    cd ../frontend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the React application:**

    ```sh
    npm start
    ```

    The React application should now be running at `http://localhost:3000`.

## Project Structure
snake-game/
├── backend/
│ ├── venv/
│ ├── app.py
│ └── requirements.txt
├── frontend/
│ ├── node_modules/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ └── App.js
│ ├── package.json
│ └── package-lock.json
└── README.md

