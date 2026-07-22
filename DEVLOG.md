# Development Log

## Tennis Shot Tracker

**Author:** Hayden Place  
**Stack:** React, Vite, Node.js, Express, MongoDB Atlas, Mongoose

## Project Overview

The Tennis Shot Tracker is a full-stack web application that allows users to click on a tennis court, record shot details, view live statistics, and save practice sessions to MongoDB Atlas.

---

## 1. Project Setup

I created the frontend with React and Vite and divided the app into reusable components.

```jsx
function App() {
  return <Home />;
}
```

Main folders:

```text
src/
├── components/
├── pages/
└── services/
```

---

## 2. React State

The main page stores the current shots and selected shot details.

```jsx
const [shots, setShots] = useState([]);
const [selectedPlayer, setSelectedPlayer] = useState("Player 1");
const [selectedShotType, setSelectedShotType] = useState("Forehand");
const [selectedResult, setSelectedResult] = useState("In");
```

This state is passed to the toolbar, court, and statistics components.

---

## 3. Clickable Tennis Court

I used an SVG tennis court and calculated each click relative to the court.

```jsx
const rect = event.currentTarget.getBoundingClientRect();

const x = ((event.clientX - rect.left) / rect.width) * 100;
const y = ((event.clientY - rect.top) / rect.height) * 100;
```

The coordinates are stored as percentages so the markers stay aligned when the court changes size.

---

## 4. Recording Shots

Each click creates a shot object containing its location and selected information.

```jsx
const newShot = {
  id: Date.now(),
  x,
  y,
  player: selectedPlayer,
  shotType: selectedShotType,
  result: selectedResult,
};

setShots((currentShots) => [...currentShots, newShot]);
```

---

## 5. Displaying Markers

The application maps over the shots array and places numbered markers on the court.

```jsx
{shots.map((shot, index) => (
  <div
    key={shot.id}
    className="shot-marker"
    style={{ left: `${shot.x}%`, top: `${shot.y}%` }}
  >
    {index + 1}
  </div>
))}
```

The markers use absolute positioning over the court image.

---

## 6. Live Statistics

Statistics are calculated from the current shots array.

```jsx
const totalShots = shots.length;

const winners = shots.filter(
  (shot) => shot.result === "Winner"
).length;
```

Because the values come from React state, they update automatically whenever a shot is added or removed.

---

## 7. Session Controls

I added controls for correcting mistakes and resetting the session.

```jsx
const undoLastShot = () => {
  setShots((currentShots) => currentShots.slice(0, -1));
};

const clearShots = () => {
  setShots([]);
};
```

---

## 8. Express Backend

I created an Express server to receive requests from the React frontend.

```js
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/sessions", sessionRoutes);
```

The backend includes routes for creating, retrieving, updating, and deleting sessions.

---

## 9. MongoDB Model

Mongoose defines how sessions are stored in MongoDB Atlas.

```js
const sessionSchema = new mongoose.Schema(
  {
    name: String,
    shots: [shotSchema],
  },
  { timestamps: true }
);
```

Each saved session contains a name, its shots, and creation and update dates.

---

## 10. Saving a Session

The frontend sends the session name and shots to the backend.

```js
await saveSession({
  name: sessionName.trim(),
  shots,
});
```

The API service uses a POST request.

```js
fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(sessionData),
});
```

The backend validates the request before saving it.

```js
const newSession = await Session.create({
  name: name.trim(),
  shots,
});
```

---

## 11. Full-Stack Connection

The completed application flow is:

```text
User clicks court
      ↓
React stores shot
      ↓
Frontend sends API request
      ↓
Express validates request
      ↓
MongoDB Atlas saves session
```

I successfully tested saving and retrieving multiple sessions.

---

## 12. Debugging

During development, I fixed several issues:

- Vite server not running
- Incorrect component exports
- Incorrect file capitalization
- MongoDB connection errors
- API route problems
- CORS configuration
- Court coordinate alignment

One example was fixing the Session model import:

```js
const Session = require("../models/Session");
```

This project helped me improve at reading error messages and testing each section separately.

---

## 13. Security and GitHub Preparation

Sensitive files are excluded through `.gitignore`.

```gitignore
node_modules/
backend/node_modules/
.env
backend/.env
dist/
```

This prevents MongoDB credentials and unnecessary dependencies from being uploaded to GitHub.

---

## 14. Deployment Plan

The project will be deployed using:

```text
React frontend → Vercel
Express backend → Render
Database → MongoDB Atlas
```

The frontend will use an environment variable for the deployed backend address.

```js
const API_URL = `${import.meta.env.VITE_API_URL}/api/sessions`;
```

---

## Skills Learned

This project gave me experience with:

- React components and state
- Props and event handling
- SVG coordinate tracking
- REST APIs
- Express routes
- MongoDB Atlas
- Mongoose models
- CRUD operations
- Environment variables
- Git and GitHub
- Full-stack debugging

---

## Future Improvements

Possible future features include:

- Saved session history
- Loading sessions back onto the court
- Deleting sessions from the frontend
- User authentication
- Shot heat maps
- Advanced statistics
- Mobile support

---

## Reflection

This project helped me understand how a React frontend, Express backend, and MongoDB database work together.

The most challenging parts were calculating court coordinates and connecting the frontend to the backend. Completing those features improved my understanding of full-stack application development and gave me more confidence debugging larger projects.