🚀 Linkly – URL Shortener

A full-stack production-ready URL shortener built with Spring Boot, React, PostgreSQL, Docker, and JWT Authentication.

Live Demo:
Frontend → https://linksshort.netlify.app

Backend → https://url-shortener-backend-latest.onrender.com

✨ Features

🔐 JWT-based Authentication (Login / Register)

🔗 Shorten long URLs

📊 Click analytics tracking

👤 User-based URL management

🐳 Dockerized backend

☁️ Cloud deployed (Render + Netlify)

🛡 Spring Security 6 with CORS configuration

🗄 PostgreSQL (Neon Cloud Database)

🏗 Tech Stack
Backend

* Java 18

* Spring Boot 4

* Spring Security

* Spring Data JPA

* PostgreSQL

* JWT (io.jsonwebtoken)

* Docker

Frontend

* React (Vite)
* Tailwind CSS
* React libraries(@mui/material, @emotion/react and emotion/styled)
* Data Handling(Axios, React Query, chart.js)
* Utlity tools (day.js)

Deployment

* DockerHub

* Render (Backend)

* Netlify (Frontend)

* Neon (PostgreSQL)

📂 Project Structure
````
linkly/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── entity/
│   ├── security/
│   ├── Dockerfile
│   └── pom.xml
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── api/
│   └── package.json
````
🔐 Environment Variables

Backend requires these environment variables:
````
SPRING_DATASOURCE_URL=
SPRING_DATASOURCE_USERNAME=
SPRING_DATASOURCE_PASSWORD=
JWT_SECRET=
JWT_EXPIRATION=
FRONTEND_URL=
````
Frontend requires:
````
VITE_BACKEND_URL= https://url-shortener-backend-latest.onrender.com
VITE_REACT_FRONT_END_URL= https://linksshort.netlify.app
````
🐳 Run Backend with Docker

Build JAR:
````
mvn clean package -DskipTests
````
Build Docker image:
````
docker build -t url-shortener-backend .
````
Run container:
````
docker run -p 8080:8080 url-shortener-backend
````
💻 Run Locally
Backend
````
mvn spring-boot:run
````
Frontend
````
npm install
npm run dev
````
📊 API Endpoints
Authentication
`````
POST /api/auth/public/register
POST /api/auth/public/login
`````
URL Operations
````
POST /api/urls/shorten
GET /api/urls
GET /api/urls/analytics/{shortUrl}
````
🔥 Deployment Architecture
````
React (Netlify)
        ↓
Spring Boot (Render - Dockerized)
        ↓
PostgreSQL (Neon Cloud)
````
🛡 Security

* Stateless JWT authentication

* Custom CORS configuration

* Protected endpoints using Spring Security

* Password hashing using BCrypt

📈 Future Improvements

* Custom domain support

* Refresh token implementation

* Rate limiting

* Redis caching for analytics

* Swagger documentation

* Custom error response handler

👨‍💻 Author

Shubham Kumar
Full Stack developer | Java Backend Developer | Spring Boot Enthusiast

⭐ If You Like This Project

Give it a ⭐ on GitHub!
