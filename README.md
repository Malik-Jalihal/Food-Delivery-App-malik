# Food_Delivery_App
Tomato. is a modern food and product delivery app built for speed, flavour, and convenience. From fresh groceries to sizzling meals, it combines seamless UI, instant ordering, and reliable delivery to elevate everyday dining into a delightful experience A modern, full-stack food delivery platform built with React, Node.js, Express, and MongoDB, designed to deliver a seamless experience for both customers and administrators. This project combines secure authentication, smooth UI/UX, and robust backend features to replicate real-world food delivery services like Blinkit, Zepto, and Swiggy.
#Overview
This application allows users to browse restaurants, add food items to their cart, make secure payments, and track orders in real-time. On the other side, administrators can manage restaurants, food items, users, and orders through a powerful dashboard with analytics.

The project demonstrates scalable architecture, clean code practices, and recruiter-friendly features — making it a strong portfolio piece for showcasing frontend + backend expertise.

👤 User Features
- **User Authentication & Authorization** - Secure login/signup with JWT and bcrypt encryption
- **Google OAuth Integration** - Quick and easy authentication with Google accounts
- **Browse Food Catalog** - Explore restaurants and food items with detailed descriptions
- **Shopping Cart Management** - Add, remove, and update items in real-time
- **Secure Payment Processing** - Integrated Stripe payment gateway for safe transactions
- **Order Management** - Track order status and view order history
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices

🏪 Admin Features
- **Dashboard** - Comprehensive overview of all operations
- **Food Management** - Add, edit, and delete food items with image uploads
- **Restaurant Settings** - Manage restaurant inventory and availability
- **Order Management** - View and update customer orders in real-time
- **Analytics** - Monitor sales and order statistics
- **User Management** - Manage customer and restaurant accounts

🔐 Security Features
- **Password Encryption** - Bcrypt hashing for secure password storage
- **JWT Authentication** - Token-based authentication for API endpoints
- **Session Management** - Express session for persistent user sessions
- **CORS Protection** - Cross-Origin Resource Sharing configured for security
- **Input Validation** - Validator.js for data validation and sanitization

🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library for dynamic user interfaces
- **Vite 5.3** - Lightning-fast build tool and development server
- **Axios 1.7** - HTTP client for API communication
- **React Router 6.23/6.25** - Client-side routing and navigation
- **React Toastify** - Elegant notifications and alerts
- **CSS3** - Modern styling and responsive design

## Backend
- **Node.js** - JavaScript runtime environment
- **Express 4.19** - Web application framework
- **MongoDB 8.5** - NoSQL database for data persistence
- **Mongoose 8.5** - ODM for MongoDB schema management
- **JWT 9.0** - Secure token-based authentication
- **Bcrypt 5.1** - Password hashing and encryption
- **Stripe 16.4** - Payment processing gateway
- **Multer 1.4** - File upload handling
- **Passport.js 0.7** - Authentication middleware
- **CORS 2.8** - Cross-origin request handling
- **Body Parser 1.20** - Request body parsing
- **Dotenv 16.4** - Environment variable management
- 
## Development Tools
- **ESLint** - Code quality and style checking
- **Vite** - Build optimization and HMR

- ## 📁 Project Structure

- Food-Order-App/
├── backend/
│ ├── config/
│ │ └── db.js # MongoDB connection configuration
│ ├── controllers/
│ │ ├── userController.js # User authentication logic
│ │ ├── foodController.js # Food CRUD operations
│ │ ├── cartController.js # Shopping cart management
│ │ └── orderController.js # Order processing
│ ├── models/
│ │ ├── userModel.js # User schema
│ │ ├── foodModel.js # Food item schema
│ │ └── orderModel.js # Order schema
│ ├── routes/
│ │ ├── userRoute.js # User endpoints
│ │ ├── foodRoute.js # Food endpoints
│ │ ├── cartRoute.js # Cart endpoints
│ │ └── orderRoute.js # Order endpoints
│ ├── middleware/
│ │ └── auth.js # JWT authentication middleware
│ ├── uploads/ # User-uploaded images
│ ├── server.js # Express server entry point
│ └── package.json
│
├── admin/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar/ # Navigation component
│ │ │ └── Sidebar/ # Sidebar navigation
│ │ ├── pages/
│ │ │ ├── Add/ # Add food item page
│ │ │ ├── List/ # Food list management
│ │ │ └── Orders/ # Order management
│ │ ├── App.jsx # Admin app root
│ │ └── main.jsx # React entry point
│ ├── vite.config.js
│ └── package.json
│
├── new/Front-End/
│ ├── src/
│ │ ├── components/ # Reusable React components
│ │ ├── pages/ # Application pages
│ │ ├── App.jsx # Main app component
│ │ └── main.jsx # React entry point
│ ├── vite.config.js
│ └── package.json
│
└── README.md

2. Backend Setup
The backend will run on http://localhost:4000

3. Frontend Setup
The frontend will run on http://localhost:5173

4. Admin Panel Setup
The admin panel will run on http://localhost:5174

📡 API Endpoints
User Routes (/user)
POST /user/register - Create a new user account
POST /user/login - Authenticate user and get JWT token
GET /user/profile - Get authenticated user profile
PUT /user/profile - Update user profile information
Food Routes (/food)
GET /food - Fetch all available food items
GET /food/:id - Get specific food item details
POST /food - Add new food item (Admin only)
PUT /food/:id - Update food item (Admin only)
DELETE /food/:id - Delete food item (Admin only)
Cart Routes (/cart)
POST /cart/add - Add item to shopping cart
GET /cart - Retrieve user's cart items
PUT /cart/update - Update cart item quantity
DELETE /cart/:itemId - Remove item from cart
DELETE /cart/clear - Clear entire cart
Order Routes (/order)
POST /order/place - Create a new order
GET /order/user - Get user's order history
GET /order/:id - Get order details
GET /order - Get all orders (Admin only)
PUT /order/:id/status - Update order status (Admin only)
Image Routes (/images)
GET /images/:filename - Access uploaded food images
🔑 Environment Variables
Create a .env file in the backend directory:

💡 How to Use
For Customers
Sign Up/Login - Create an account or login with Google
Browse Menu - Explore available restaurants and food items
Add to Cart - Select items and quantities
Proceed to Checkout - Review cart and proceed payment
Make Payment - Secure payment via Stripe
Track Order - Monitor order status and delivery updates
For Administrators
Access Admin Panel - Navigate to /admin
Manage Food Items - Add, edit, or remove food items
Monitor Orders - View and update customer orders
View Analytics - Check sales and performance metrics
Manage Users - Handle customer and restaurant accounts
🔐 Authentication & Security
The application implements multiple layers of security:

JWT Tokens - Stateless authentication using JSON Web Tokens
Password Hashing - Bcrypt encryption for secure password storage
Session Management - Express session for enhanced security
Google OAuth - Industry-standard third-party authentication
CORS Configuration - Prevents unauthorized cross-origin requests
Data Validation - Validator.js ensures data integrity
Stripe PCI Compliance - Secure payment processing meeting industry standards
🌐 Deployment
Backend Deployment (/Render)
Frontend Deployment (Vercel/Netlify)
Admin Panel Deployment
📊 Database Schema
User Schema
_id - Unique user identifier
name - Full name
email - Email address (unique)
password - Hashed password
phone - Contact number
address - Delivery address
createdAt - Account creation timestamp
Food Schema
_id - Unique food item identifier
name - Food name
description - Food description
category - Food category
price - Food price
image - Image URL
restaurant - Associated restaurant
available - Availability status
createdAt - Creation timestamp
Order Schema
_id - Unique order identifier
user - User reference
items - Array of ordered items
totalAmount - Order total price
status - Order status (pending, confirmed, preparing, out for delivery, delivered)
deliveryAddress - Delivery location
paymentMethod - Payment method used
paymentStatus - Payment confirmation status
createdAt - Order timestamp
updatedAt - Last update timestamp
🤝 Contributing
Contributions are welcome! Here's how you can help:

Fork the repository
Create a Feature Branch - git checkout -b feature/AmazingFeature
Commit Changes - git commit -m 'Add some AmazingFeature'
Push to Branch - git push origin feature/AmazingFeature
Open a Pull Request - Provide detailed description of changes
Code Style Guidelines
Follow ESLint configuration
Write clear, descriptive commit messages
Maintain consistent code formatting
Add comments for complex logic
Test before submitting PR
📝 License
This project is licensed under the ISC License - see the LICENSE file for details.

📧 Contact & Support
Email - malikjalihal123@gmail.com
GitHub - @Malik-Jalihal
Have questions or suggestions? Feel free to open an issue or reach out directly!

🙏 Acknowledgments
React Documentation
Express.js Guide
MongoDB Documentation
Stripe API Reference
Inspired by modern food delivery applications
📈 Future Enhancements
 Real-time order tracking with Google Maps integration
 Push notifications for order updates
 Reviews and ratings system
 Loyalty rewards program
 Multiple payment gateways
 Restaurant ratings and reviews
 Advanced search and filtering
 Order scheduling for future delivery
 Mobile app (React Native)
 Email and SMS notifications
⭐ If you found this project helpful, please consider giving it a star!
