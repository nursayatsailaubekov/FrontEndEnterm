# AutoMarket

A modern web application for browsing, searching, and managing car advertisements. This project was built as a comprehensive React application demonstrating state management, routing, and secure authentication practices.

---

## Project Description

**AutoMarket** is a specialized platform where users can explore a catalog of vehicles, view detailed specifications, and manage their own listings. The app features a seamless User Experience with a responsive design, global state management for authentication and theming, and a persistent data layer using a REST API.

### Key Features:
* **Authentication & Security:** Secure registration and login system featuring client-side password hashing with `bcryptjs`.
* **Dynamic Routing:** Dedicated detail pages for each vehicle using React Router's dynamic `:id` parameters.
* **Global State:** Centralized management of user sessions and UI themes (Light/Dark mode) via Context API.
* **Smart Search:** Real-time car filtering optimized with the `useMemo` hook for better performance.
* **CRUD Operations:** Full ability to Create, Read, Update, and Delete car listings connected to a JSON backend.
* **Responsive UI:** Mobile-friendly navigation and layouts built with modern CSS techniques (Flexbox, Grid, ).

---

## Tech Stack

* **Frontend:** React 18
* **Routing:** React Router Dom v6
* **State Management:** Context API (`AuthContext`, `ThemeContext`)
* **Backend (imitation):** JSON-Server (REST API)
* **Security:** bcryptjs
* **Data Fetching:** Fetch API
* **Storage:** LocalStorage, JSON-Server

---

## Setup & Installation

Follow these steps to get the project running locally:

1. Install project folder
2. Create react app
3. Install dependepcies, libraries: npm install react react-dom react-router-dom bcryptjs
4. Open cmd and refer to project folder: cd auto-market
5. Start the server: npx json-server --watch db.json --port 5000
6. Start the project: npm start


