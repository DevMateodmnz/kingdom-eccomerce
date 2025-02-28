# MERN E-commerce Project Setup Guide

This guide will help you set up and run your MERN (MongoDB, Express, React, Node.js) e-commerce project with a design inspired by The Kingdom website.

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)
- Git

## Project Setup

### 1. Clone or Create the Project

Start by creating the project structure as outlined in the documentation.

```bash
mkdir mern-ecommerce
cd mern-ecommerce
```

### 2. Backend Setup

First, let's set up the server (backend) part of the application:

```bash
mkdir server
cd server
npm init -y
```

Install necessary dependencies:

```bash
npm install express mongoose dotenv bcryptjs jsonwebtoken colors morgan multer path
npm install -D nodemon concurrently
```

Create a `.env` file in the server directory:

```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret
```

### 3. Frontend Setup

Next, set up the React frontend:

```bash
cd ..
npx create-react-app client
cd client
```

Install frontend dependencies:

```bash
npm install axios react-router-dom redux react-redux redux-thunk redux-devtools-extension react-bootstrap bootstrap react-helmet react-icons
```

### 4. Root Configuration

Create a package.json file in the root directory to manage both frontend and backend:

```bash
cd ..
npm init -y
```

Update the root package.json scripts:

```json
"scripts": {
  "start": "node server/server.js",
  "server": "nodemon server/server.js",
  "client": "npm start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\"",
  "data:import": "node server/seeder.js",
  "data:destroy": "node server/seeder.js -d"
}
```

### 5. Database Connection

Create the MongoDB connection in `server/config/db.js`:

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### 6. Running the Application

You can now run the full-stack application with:

```bash
npm run dev
```

This will start both the backend server (on port 5000) and the React frontend (on port 3000).

## Project Workflow

Here's how to continue developing your e-commerce site:

1. **Design System**: 
   - Set up Tailwind CSS for styling
   - Create a consistent color palette and typography system
   - Build reusable components

2. **Frontend Development**:
   - Implement all React components using the provided examples
   - Set up Redux store for state management
   - Create API utility functions for backend communication

3. **Backend Development**:
   - Complete all controllers for handling API requests
   - Implement authentication middleware
   - Set up image upload functionality

4. **Testing**:
   - Test API endpoints with Postman
   - Test frontend components
   - Perform integration testing

5. **Deployment**:
   - Prepare for production build
   - Deploy to hosting platform (Heroku, Vercel, AWS, etc.)

## Key Features to Implement

Based on The Kingdom website design:

1. **Product Features**:
   - Product filtering by category, price, size, etc.
   - Product search functionality
   - Product image galleries

2. **User Features**:
   - User authentication (signup, login, profile)
   - Wishlist functionality
   - Order history

3. **Shopping Features**:
   - Shopping cart
   - Checkout process
   - Payment integration

4. **Admin Features**:
   - Product management
   - Order management
   - User management
   - Analytics dashboard

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
