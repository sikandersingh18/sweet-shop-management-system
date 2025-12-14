# sweet-shop-management-system

A full-stack Sweet Shop Management System built as part of the Incubyte Placement Assessment.  
The application allows users to browse and purchase sweets, while administrators can manage inventory securely through a role-based system.

---

## 🚀 Features

### 👤 User Features
- User registration and login with JWT authentication
- View all available sweets
- Search and filter sweets by name and category
- Purchase sweets (quantity decreases automatically)
- Purchase button disabled when stock is zero

### 🛠 Admin Features
- Add new sweets
- Update existing sweets
- Delete sweets
- Restock sweets
- Role-based access control (Admin-only operations)

---

## 🧱 Tech Stack

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- Jest (Testing)

### Frontend
- React (Vite)
- Axios
- React Router DOM
- CSS (Custom, no UI library)

---

## 📂 Project Structure

Incubyte_assesment/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middleware/
│ │ ├── services/
│ │ ├── utils/
│ │ ├── app.js
│ │ ├── server.js
│ │ └── db.js
│ ├── tests/
│ ├── company_db.sql
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── auth/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ └── package.json
│
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sikandersingh18/sweet-shop-management-system.git
cd sweet-shop-management-system

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside backend/:

PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=sweet_shop

JWT_SECRET=supersecretkey


Create database and tables:

psql -U your_postgres_username
CREATE DATABASE sweet_shop;
\c sweet_shop
\i company_db.sql


Start backend server:

npm run dev


Health check:

http://localhost:3000/api/health

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔌 API Endpoints
Auth

POST /api/auth/register

POST /api/auth/login

Sweets (Protected)

GET /api/sweets

GET /api/sweets/search

POST /api/sweets (Admin)

PUT /api/sweets/:id (Admin)

DELETE /api/sweets/:id (Admin)

Inventory

POST /api/sweets/:id/purchase

POST /api/sweets/:id/restock (Admin)


🤖 My AI Usage

AI tools were used responsibly during development to enhance productivity and code quality.

Tools Used

ChatGPT

How AI Was Used

Generating initial boilerplate code for backend and frontend

Assisting with API structure and folder organization

Debugging integration issues between frontend and backend

Improving UI/UX structure and readability

Reflection

AI helped speed up development and resolve technical blockers, but all logic, architectural decisions, and final implementations were reviewed, understood, and finalized manually.

📌 Notes

This project uses a real PostgreSQL database (no in-memory DB).

Authentication and authorization are implemented using JWT.

Code follows clean structure and separation of concerns.

Git history includes transparent AI co-authorship as required.


👤 Author

Sikander Singh
B.E. Computer Science Engineering
Chandigarh University
