// Assignment: Student Management System with Authentication
// 📌 Problem Statement:
// Build a Student Database Web API using Node.js, Express, MongoDB, and JWT-based authentication. This system should allow users to register and log in securely, and once authenticated, they should be able to manage (create, read, update, and delete) student records.

// ✅ Requirements:
// User Authentication

// Implement user registration and login.

// Use bcryptjs to hash passwords.

// Issue a JWT token on successful login.

// Protect student-related routes using JWT middleware.

// Student Schema
// Each student document should include:

// name: String, required

// rollNumber: String, required, unique

// department: String, required

// year: Number, required

// userId: ObjectId (reference to the authenticated user)

// CRUD Operations on Students

// ✅ GET /api/students – Fetch all students for logged-in user

// ✅ POST /api/students – Add a new student

// ✅ PUT /api/students/:id – Update student details

// ✅ DELETE /api/students/:id – Remove a student

// Validation & Error Handling

// Handle duplicate usernames or roll numbers.

// Return proper error messages for unauthorized access, missing fields, etc.

// Code Modularity (Bonus)

// Structure your code with models, routes, and controllers if possible.

// 🧪 Optional Bonus Features:
// Search/filter students by department or year.

// Add sorting (e.g., by name or roll number).

// Add pagination.

// Add a status field (active/inactive) to students.

// 📦 Technologies to Use:
// Node.js

// Express.js

// MongoDB (with Mongoose)

// bcryptjs

// jsonwebtoken

// Postman for testing (or optional frontend)