# Salling Online - E-commerce Platform

![Salling Online Screenshot](client/public/images/screenshot.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

Salling Online is a full-stack e-commerce platform built with modern web technologies. It provides a complete shopping experience with user authentication, product browsing, cart functionality, and more. The application features a responsive design that works across all device sizes.

## Features

### Frontend
- Responsive design with mobile-first approach
- User authentication (login/registration)
- Product browsing with categories
- Shopping cart functionality
- Product ratings and reviews
- Interactive UI with animations

### Backend
- JWT authentication
- Role-based authorization (user/admin)
- CRUD operations for products
- MongoDB database
- RESTful API design
- Secure password storage

## Technologies

### Frontend
- HTML5, CSS3, JavaScript
- Responsive design with Flexbox/Grid
- Vanilla JavaScript (no frameworks)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- Bcrypt for password hashing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/salling-online.git
   cd salling-online
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

4. Create a `.env` file in the `server` directory with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/salling-online
   JWT_SECRET=your-secret-key
   JWT_EXPIRE=30d
   JWT_COOKIE_EXPIRE=30
   ```

## Configuration

1. **Database Setup**:
   - Install MongoDB locally or use a cloud service like MongoDB Atlas
   - Update the `MONGODB_URI` in your `.env` file

2. **Environment Variables**:
   - `JWT_SECRET`: A secret key for JWT token generation
   - `JWT_EXPIRE`: Token expiration time (e.g., "30d" for 30 days)
   - `JWT_COOKIE_EXPIRE`: Cookie expiration in days

3. **Images**:
   - Place product images in `client/public/images/products`
   - Update image paths in the product data as needed

## Running the Application

### Development Mode
```bash
npm run dev
```
This will start both the backend server and frontend development server concurrently.

### Production Mode
1. Build the frontend:
   ```bash
   npm run build --prefix client
   ```

2. Start the server:
   ```bash
   npm start
   ```

## Deployment

### Heroku
1. Create a Heroku account and install the CLI
2. Create a new Heroku app:
   ```bash
   heroku create
   ```
3. Set up MongoDB Atlas and get your connection string
4. Set environment variables in Heroku:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   heroku config:set NODE_ENV=production
   ```
5. Deploy:
   ```bash
   git push heroku mai
### Other Platforms
The application can be deployed to any platform that supports Node.js applications with MongoDB.
## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)
## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
**Note**: This is a complete README file for your Salling Online e-commerce platform. You may want to customize it further with your specific project details, screenshots, and additional documentation as needed. The file includes all the essential sections that users and developers would need to understand, install, configure, and contribute to your project.
