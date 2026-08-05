# Ecommerce API

A production-ready RESTful backend application for an E-Commerce platform built using **Java** and **Spring Boot**. The project follows a layered architecture and provides APIs for managing products, users, shopping carts, and orders. It uses **MySQL** for data persistence, **Flyway** for database versioning, and **Docker Compose** for containerized deployment.

---

## Table of Contents

- Features
- Tech Stack
- Architecture
- Domain Model
- Project Structure
- Getting Started
  - Docker Compose
  - Run Locally
- API Reference
- Testing
- Future Enhancements
- License

---

## Features

### Product Management
- Create, update, delete, and retrieve products
- Retrieve active products
- Search products by keyword

### User Management
- Create user accounts
- Update user profile and address
- Retrieve user information by email

### Shopping Cart
- Add products to cart
- Update item quantity
- Remove items from cart
- Stock validation during cart operations

### Order Management
- Place orders from the shopping cart
- View order history
- Snapshot product prices during checkout

### Additional Features
- RESTful API design
- Layered architecture
- Global exception handling
- Database versioning using Flyway
- Docker containerization

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Language | Java 21 |
| Framework | Spring Boot |
| Persistence | Spring Data JPA, Hibernate |
| Database | MySQL |
| Database Migration | Flyway |
| Build Tool | Maven |
| Containerization | Docker, Docker Compose |
| API Testing | Postman |
| Utilities | Lombok |

---

## Architecture

The application follows a layered architecture to maintain separation of concerns.

```
                Client
         (Postman / React)
                 │
                 ▼
         REST Controllers
                 │
                 ▼
          Service Layer
        (Business Logic)
                 │
                 ▼
       Repository Layer
      (Spring Data JPA)
                 │
                 ▼
             MySQL Database
```

### Layers

- **Controller** – Handles HTTP requests and responses.
- **Service** – Contains business logic.
- **Repository** – Performs database operations.
- **Entity** – Represents database tables.
- **DTO** – Used for request and response models.
- **Exception** – Global exception handling.

---

## Domain Model

```
User (1) ─── (1) Address

User (1) ─── (1) Cart
                 │
                 ▼
             CartItem
                 │
                 ▼
              Product

User (1) ─── (*) Order
                 │
                 ▼
             OrderItem
                 │
                 ▼
              Product

Category (1) ─── (*) Product
```

---

## Project Structure

```
ecommerce-api
│
├── docker-compose.yml
├── postman/
│   └── ecommerce.postman_collection.json
│
└── ecommerce-backend
    ├── pom.xml
    └── src
        └── main
            ├── java/com/app/ecommerce
            │   ├── controller
            │   ├── service
            │   ├── repository
            │   ├── entity
            │   ├── dto
            │   ├── mapper
            │   ├── exception
            │   ├── config
            │   └── util
            │
            └── resources
                ├── application.properties
                └── db
                    └── migration
```

---

## Getting Started

### Prerequisites

- Java 21
- Maven
- Docker
- Docker Compose
- MySQL

---

## Option 1: Run with Docker Compose

Start the application along with MySQL and CloudBeaver.

```bash
docker compose up -d
```

### Services

| Service | URL |
|---------|-----|
| REST API | http://localhost:8080 |
| MySQL | localhost:3307 |
| CloudBeaver | http://localhost:8978 |

---

## Option 2: Run Locally

Create the database.

```sql
CREATE DATABASE ecommerce_db;
```

Update your database configuration.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

Run the application.

```bash
cd ecommerce-backend

mvn spring-boot:run
```

Flyway automatically executes database migrations during application startup.

---

# API Reference

## Products

Base URL

```
/api/products
```

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Get all products |
| GET | `/active` | Get active products |
| GET | `/{id}` | Get product by ID |
| GET | `/search?keyword=` | Search products |
| POST | `/` | Create product |
| PUT | `/{id}` | Update product |
| DELETE | `/{id}` | Delete product |

---

## Users

Base URL

```
/api/users
```

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Get all users |
| GET | `/{email}` | Get user by email |
| POST | `/` | Create user |
| PUT | `/{id}` | Update user |

---

## Cart

Base URL

```
/api/cart
```

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `?userId=` | Get cart items |
| POST | `?userId=` | Add product to cart |
| PUT | `/items?userId=` | Update quantity |
| DELETE | `/items?userId=&productId=` | Remove product |

---

## Orders

Base URL

```
/api/orders
```

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/{userId}` | Get order history |
| POST | `/{userId}` | Place order |

---

## Testing

A ready-to-import Postman collection is included in the repository.

Suggested workflow:

1. Create a user.
2. Create categories.
3. Create products.
4. Add products to cart.
5. Update cart quantities.
6. Place an order.
7. View order history.

---

## Future Enhancements

- Spring Security with JWT Authentication
- Role-Based Authorization
- Product Image Upload
- Pagination and Sorting
- Redis Caching
- Email Notifications
- Swagger / OpenAPI Documentation
- Unit Testing
- Integration Testing
- GitHub Actions CI/CD Pipeline

---

## License

This project was developed for learning purposes and portfolio demonstration.

---

## Author

**Aathi**

GitHub: https://github.com/aathi1412

LinkedIn: *Add your LinkedIn Profile URL*
