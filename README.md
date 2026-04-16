# 🍽️ AI-Powered Restaurant Feedback Analyzer

## 🚀 Overview

This is a full-stack web application that allows users to submit restaurant reviews. The backend processes the review using a Large Language Model (LLM) to extract structured insights such as sentiment, key items, and whether urgent action is required.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS

### Backend

* Node.js (Express.js)
* REST API architecture

### Database

* MongoDB (Mongoose)

### LLM Integration

* Groq API (LLaMA 3 model)

---

## ⚙️ Features

* Submit restaurant reviews
* LLM-based sentiment analysis
* Extract key items (food, service, etc.)
* Detect urgent issues (e.g., rude staff, bad food)
* Store structured data in MongoDB
* View all processed insights in dashboard

---

## 📦 Project Structure

```
root/
├── Backend/
│   ├── src/
│   ├── config/
│   └── Server.js
├── frontend/
```

---

## 🧑‍💻 Running Locally

### 1. Clone the repository

```
git clone https://github.com/Xanxain/Quantyra_Assignment_Saptarsi.git
```

---

### 2. Setup Backend

```
cd Backend
npm install
```

Create a `.env` file in `Backend/`:

```
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

Run backend:

```
node Server.js
```

---

### 3. Setup Frontend

```
cd frontend
npm install
npm run dev
```

### ⚠️ API Configuration

The frontend API base URL is currently hardcoded for simplicity.

You can find it in:

frontend/src/services/Api.js

Example:
const BASE_URL = "https://random.onrender.com";

If needed, this can be replaced with environment variables for better configuration management.

---

## 🌐 API Endpoints

### POST `/api/feedback`

Submit a restaurant review.

Request:

```
{
  "text": "The food was amazing but service was slow"
}
```

---

### GET `/api/insights`

Fetch all processed feedback data.

---

## ⚠️ Environment Variables

Make sure to add the following variables locally:

### Backend (`Backend/.env`)

* `MONGO_URI`
* `GROQ_API_KEY`

---

## 🧠 Tech Decisions

* **Node.js + Express**: Chosen for simplicity and fast API development.
* **MongoDB**: Flexible schema for storing structured LLM output.
* **Groq LLM**: Free and fast inference for real-time processing.
* **React + Tailwind**: Quick UI development with clean design.
* **Modular Architecture**: Separation of routes, controllers, and services for scalability.

---

## 🚀 Deployment

* Backend deployed on Render
* Frontend deployed on Vercel

---

## 📌 Notes

* LLM output is validated before storing in DB
* JSON extraction ensures structured response
* Fallback handling implemented for API failures

---

## 👨‍💻 Author

Saptarsi Das
