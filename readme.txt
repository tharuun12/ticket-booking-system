Folder Structure
The project consists of two main folders:
frontend: Contains the frontend code.
backend: Contains the backend code.
Steps to Set Up and Run

1. Open the Project
Locate the folder named TicketBooking on your system.
Open the folder in your file explorer.

2. Open Frontend and Backend in Separate VS Code Instances
Right-click the frontend folder and choose Open with VS Code.\
Do the same for the backend folder to open it in a separate VS Code window.

3. Backend Setup
Open the terminal in the backend VS Code instance.
Run the following commands:

cd server       # Navigate to the server directory
npm install     # Install the required dependencies
npm run server  # Start the backend server

4. Frontend Setup
Open the terminal in the frontend VS Code instance.
Run the following commands:

npm install             # Install dependencies
npm install jose         # Install the jose library
npm install next-themes  # Install the next-themes library
npm run dev             # Start the frontend development server

5. Access the Application
Once the servers are running:
The backend server will be running on a specified port (check the terminal for details).
Open your browser and navigate to the URL displayed in the frontend terminal to access the application.