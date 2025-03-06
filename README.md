# 🛒 E-Commerce Website

A simple e-commerce website built with **Express.js**, **MongoDB**, and **EJS** for backend learning practice. The project includes **user authentication**, **cart functionality**, and **admin product management**.

---

## Features

- **User Authentication** – Secure signup/login with **bcrypt** and **JWT**  
- **Shopping Cart** – Add products to cart and proceed with purchases  
- **Product Management** – Admin/owner can add and manage products  
- **Session & Flash Messages** – Enhanced user experience with **express-session** and **connect-flash**  
- **Modular Routing** – Organized routes for **users, products, and owners**  
- **Secure Configuration** – Environment variables managed using **dotenv**  

---

## Project Structure

│-- 📂 config # Database connection
│-- 📂 controllers #  Authentication and Ecryption of password
│-- 📂 middlewares # for isloggedin
│-- 📂 models # Mongoose models
│-- 📂 public # Static assets (CSS, JS, images)
│-- 📂 routes # Express route handlers
│-- 📂 utils # for generating tokens
│-- 📂 views # EJS templates
│-- 📜 LICENSE 
│-- 📜 app.js # Main server file
│-- 📜 .env #  environment file
│-- 📜 package.json # Dependencies & scripts
│-- 📜 README.md # Project documentation

---

## Installation & Setup
### Clone the Repository

```bash
git clone https://github.com/qaisersofficial/E-Ecommerce-website-a-backend-project.git
cd E-Ecommerce-website-a-backend-project
```
### Install Dependencies
```bash
npm install
```
### Configure Environment Variables
Create a .env file in the root directory and add the required environment variables:
```bash
EXPRESS_SESSION_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
### Run the Server
```bash
npx nodemon app.js
```
### Tech Stack
- Backend: Express.js, MongoDB, Mongoose
- Frontend: EJS, Bootstrap (optional)
- Authentication: bcrypt, JWT
- Middleware: express-session, connect-flash, cookie-parser
- Environment Handling: dotenv

### Security & Best Practices
 Passwords are encrypted using bcrypt before storing in the database.
 JWT tokens are used for secure authentication.
 Environment variables protect sensitive credentials.
 ### Future Enhancements
- Implement payment gateway integration (e.g., Stripe, PayPal)
- Add product categories and filtering options
- Create an order history feature
- Improve UI/UX with Tailwind CSS or Bootstrap