# 🏨 Hotel Booking Website

A full-stack hotel booking platform where users can search, view, and book hotel rooms based on location, availability, and pricing. Built using the MERN stack with secure authentication and optimized media handling.

## 🌐 Live Demo
👉 [Home Stay](https://home-stay-112001.netlify.app/)

---

## ⚙️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Clerk-3D3D3D?style=for-the-badge&logoColor=white"/>
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
</p>

---

## 🔑 Features

- User-friendly interface with hotel listings and filtering by price, location, and rating.
- User authentication with Clerk (register, login, logout).
- Hotel booking functionality with live availability check.
- Admin panel for managing listings and users.
- Responsive UI with Tailwind CSS.
- Cloudinary integration for optimized hotel images.
- RESTful API backend with secure endpoints.

### 🧑‍💼 User
- Register/Login
- Search hotels and rooms
- Check room availability
- Book a room
- View booking history

### 🏢 Hotel Owner
- Register a hotel
- Add multiple rooms with images
- Toggle room availability
- View bookings for their hotel

---

## 🔧 Tech Stack

- **Frontend:** React.js, Tailwind CSS (or CSS)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Clerk or JWT-based
- **File Uploads:** Multer (for room images)

---

## 🔌 API Endpoints

### 🔹 User Routes (`/api/user`)

| Method | Endpoint                     | Description                            |
|--------|------------------------------|----------------------------------------|
| GET    | `/api/user/`                 | Get logged-in user data                |
| POST   | `/api/user/store-recent-search` | Store recently searched cities      |

---

### 🔹 Hotel Routes (`/api/hotel`)

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| POST   | `/api/hotel/`   | Register a hotel (owner) |

---

### 🔹 Room Routes (`/api/room`)

| Method | Endpoint                        | Description                             |
|--------|----------------------------------|-----------------------------------------|
| POST   | `/api/room/`                    | Create room with up to 4 images         |
| GET    | `/api/room/`                    | Get list of available rooms             |
| GET    | `/api/room/owner`              | Get owner’s listed rooms                |
| POST   | `/api/room/toggle-availability` | Toggle availability of a specific room  |

---

### 🔹 Booking Routes (`/api/booking`)

| Method | Endpoint                         | Description                        |
|--------|----------------------------------|------------------------------------|
| POST   | `/api/booking/check-availability` | Check if room is available        |
| POST   | `/api/booking/book`              | Book a room (authenticated)        |
| GET    | `/api/booking/user`              | Get current user's bookings        |
| GET    | `/api/booking/hotel`             | Get bookings for a hotel owner     |

---
