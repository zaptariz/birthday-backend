# Birthday Celebration Web Application

A beautiful and animated web application to celebrate a special birthday! Built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- Beautiful animated UI with confetti effects
- Interactive message board for birthday wishes
- Responsive design that works on all devices
- Real-time updates for new messages
- Modern and elegant styling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd vini-bday
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
cd ..
```

4. Create a `.env` file in the root directory with the following content:
```
MONGODB_URI=mongodb://localhost:27017/vini-bday
PORT=5000
```

5. Start MongoDB:
Make sure MongoDB is running on your system. If you're using MongoDB Atlas, update the MONGODB_URI in the .env file with your connection string.

## Running the Application

1. Start the backend server:
```bash
npm run dev
```

2. In a new terminal, start the frontend:
```bash
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Technologies Used

- Frontend:
  - React.js
  - Material-UI
  - Framer Motion (animations)
  - React Confetti
  - Axios

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Contributing

Feel free to submit issues and enhancement requests! # birthday-backend
# birthday-backend
