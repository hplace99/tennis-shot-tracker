# 🎾 Tennis Shot Tracker

A full-stack web application that allows tennis players and coaches to record, analyze, and save shot placement during practice sessions. Users can click directly on a tennis court to track where shots land, categorize each shot, and save sessions to a MongoDB Atlas database for future review.

---

## Features

- Interactive clickable tennis court
- Record shot placement by clicking on the court
- Select:
  - Player
  - Shot Type
  - Shot Result
- Real-time shot markers
- Live shot statistics
- Undo last shot
- Clear current session
- Save practice sessions to MongoDB Atlas
- RESTful API for creating, retrieving, updating, and deleting sessions

---

## Technology Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Development Tools

- Visual Studio Code
- Git
- GitHub

---

## Project Structure

```
tennis-shot-tracker/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── data/
│   └── styles/
│
├── public/
├── package.json
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/tennis-shot-tracker.git
```

### Navigate into the project

```bash
cd tennis-shot-tracker
```

### Install frontend dependencies

```bash
npm install
```

### Install backend dependencies

```bash
cd backend
npm install
```

---

## Environment Variables

### Backend (.env)

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)

```
VITE_API_URL=http://localhost:5000
```

---

## Running the Application

### Start the backend

```bash
cd backend
npm run dev
```

### Start the frontend

```bash
npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/sessions | Retrieve all saved sessions |
| GET | /api/sessions/:id | Retrieve a single session |
| POST | /api/sessions | Create a new session |
| PUT | /api/sessions/:id | Update a session |
| DELETE | /api/sessions/:id | Delete a session |

---

## Future Improvements

- User authentication
- Session history page
- Heat map visualization
- Match statistics dashboard
- Mobile version using React Native
- Export session data
- Player profiles
- Advanced analytics

---

## Learning Outcomes

This project demonstrates experience with:

- React component architecture
- React state management
- REST API development
- Express.js routing
- MongoDB Atlas integration
- Mongoose data modeling
- CRUD operations
- Client-server communication
- Environment variables
- Git and GitHub version control

---

## Author

**Hayden Place**

Software Development Student

---

## License

This project was created for educational purposes.