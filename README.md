# Student Alumni Networking Platform - Backend API

A secure, production-ready MERN stack backend infrastructure engineered to handle user authentication, session security, and Role-Based Access Control (RBAC) for a collaborative student-alumni network.

## System Architecture & Data Flow
```text
       [ Incoming Client Request ]
                    │
                    ▼
          ┌───────────────────┐
          │     server.js     │  (Application Entry Point)
          └─────────┬─────────┘
                    │
                    ▼
          ┌───────────────────┐
          │    authRoutes     │  (Endpoint Router Layer)
          └─────────┬─────────┘
                    │
                    ▼
          ┌───────────────────┐
          │  authMiddleware   │  (Security Gate: Validates JWT token
          └─────────┬─────────┘   & checks if role is Allowed)
                    │
                    ▼
          ┌───────────────────┐
          │  authController   │  (Execution Logic: Processes login/signup)
          └─────────┬─────────┘
                    │
                    ▼
          ┌───────────────────┐
          │     User Model    │  (Data Layer: Uses Bcrypt to securely
          └─────────┬─────────┘   hash passwords before saving)
                    │
                    ▼
          ┌───────────────────┐
          │   MongoDB Atlas   │  (Cloud Database Storage Cluster)
          └───────────────────┘
