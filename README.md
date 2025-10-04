# Online Blood Bank Management System

A simple full-stack web application built using Spring Boot (Java) for the backend, MySQL (Docker) for the database, and HTML/CSS/JavaScript for the frontend. This project demonstrates how to build and connect a complete web app with REST APIs, database migrations, and a basic UI.

---

## Overview

This application helps manage blood donor information efficiently. Users can register new donors, view donor lists, and retrieve donor details. It’s a minimal project to learn how frontend, backend, and database layers interact together.

---

## Tech Stack

Backend: Java, Spring Boot, Gradle
Database: MySQL (Docker)
Migrations: Flyway
Frontend: HTML, CSS, JavaScript
Containerization: Docker Desktop

---

## Project Structure

```
blood-bank-app/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/bloodbank/
│   │   │   │   ├── controller/DonorController.java
│   │   │   │   ├── entity/Donor.java
│   │   │   │   ├── repository/DonorRepository.java
│   │   │   │   └── BloodBankApplication.java
│   │   │   └── resources/
│   │   │       ├── application.yml
│   │   │       └── db/migration/V1__create_donor_table.sql
│   │   └── test/
│   └── build.gradle
│
├── frontend/
│   ├── index.html
│   ├── register.html
│   ├── donors.html
│   ├── styles.css
│   └── scripts.js
│
└── docker-compose.yml
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/blood-bank-app.git
cd blood-bank-app
```

---

### 2. MySQL Setup Using Docker

Create a docker-compose.yml file in your project root:

```yaml
version: "3.8"
services:
  mysql:
    image: mysql:8.0
    container_name: bloodbank-mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: bloodbank_db
    ports:
      - "3306:3306"
    volumes:
      - ./mysql_data:/var/lib/mysql
```

Start MySQL using Docker:

```bash
docker-compose up -d
```

Check if the container is running:

```bash
docker ps
```

---

### 3. Backend Setup (Spring Boot)

#### Configure application.yml

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/bloodbank_db
    username: root
    password: root
  jpa:
    hibernate:
      ddl-auto: none
    show-sql: true
  flyway:
    enabled: true
server:
  port: 8080
```

#### Flyway Migration Script

File: src/main/resources/db/migration/V1__create_donor_table.sql

```sql
CREATE TABLE donors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    blood_group VARCHAR(10) NOT NULL,
    contact VARCHAR(15),
    city VARCHAR(100)
);
```

#### Run the Backend

```bash
./gradlew bootRun
```

Backend API will be available at: http://localhost:8080/api/donors

---

### 4. Frontend Setup (HTML/CSS/JS)

You can open register.html or donors.html directly in your browser. If you face CORS issues, start a local server:

```bash
# Option 1: Python
cd frontend
python -m http.server 5500

# Option 2: VS Code Live Server
# Right-click any HTML file → "Open with Live Server"
```

Frontend will be accessible at http://localhost:5500/register.html

---

### 5. Testing the Application

1. Start Docker MySQL (`docker-compose up -d`)
2. Run Spring Boot app (`./gradlew bootRun`)
3. Open register.html → Add a donor (POST /api/donors)
4. Open donors.html → Fetch all donors (GET /api/donors)
5. Verify data appears correctly.

---

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST   | /api/donors | Add a new donor |
| GET    | /api/donors | Retrieve all donors |
| GET    | /api/donors/{id} | Retrieve donor by ID |

---

## Example Donor JSON

```json
{
  "name": "Alice",
  "blood_group": "O+",
  "contact": "9876543210",
  "city": "Hyderabad"
}
```

---

## Future Enhancements

- Add authentication using JWT
- Add donor search and filtering
- Implement hospital and blood request management
- Deploy to cloud (AWS / Render / Railway)
- Create React or Angular frontend version

---

## Author

**Davuluri Udaya Santhi**
Java Backend Developer (2 Years Experience)
Hyderabad, India

GitHub: https://github.com/<your-username>

---

## License

This project is open-source under the MIT License.

---

## Screenshots (Optional)

You can add screenshots of:
- Register Donor page
- Donor List page
- Docker & Spring Boot running logs

---

## Summary

This project demonstrates how backend (Spring Boot), frontend (HTML/JS), and database (MySQL via Docker) work together. It’s an ideal beginner-friendly project to showcase your end-to-end web application development skills on your resume or GitHub.

