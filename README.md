## PlantCare App

PlantCare is an interactive web application designed to help plant enthusiasts take care of their plants more efficiently. The app allows users to manage their plant collection, receive personalized care recommendations, and track plant health over time. With features like plant watering reminders and the ability to upload plant photos, PlantCare aims to create an intuitive and personalized experience for every plant owner.

### Key Features:

- **User Authentication**: Secure login and registration with JWT (JSON Web Tokens) to manage user data.  
- **Plant Management**: Users can add, update, delete, and view the details of their plants. Each plant entry includes essential information like species, watering schedules, and notes.  
- **Personalized Recommendations**: The app provides tailored plant care tips and recommendations based on the plant’s species and the user’s interaction with the app.  
- **Image Upload Support**: Users can upload photos of their plants, which are stored on the server.  
- **Reminder System**: The app sends notifications or recommendations for upcoming plant care tasks, including watering, repotting, etc.  
- **Smart Recommendations**: Future updates will include AI-driven recommendations, such as detecting plant diseases from photos.  

## Features

- User authentication using JWT  
- Full CRUD functionality for managing plant data  
- Smart care recommendations for each user  
- Image upload support for plant photos  
- PostgreSQL database integration  
- RESTful API ready for integration with React frontend  
- Interactive frontend with React  

## User Stories

- As a user, I want to be able to create an account or log in.  
- As a user, I want to add a new plant.  
- As a user, I want to edit the details of a plant.  

## Tech Stack

### Backend:
- Python 3.11  
- Django 5  
- Django REST Framework  
- Simple JWT  
- PostgreSQL  
- Pillow (for image handling)  
- django-cors-headers  

### Frontend:
- React  
- Axios (for API requests)  
- React Router (for routing)  
- Styled Components or CSS Modules (for styling)  

## Entity Relationship Diagram (ERD)

### User Table

| Field       | Type      | Description              |
|-------------|-----------|--------------------------|
| id          | UUID      | Primary Key              |
| username    | String    | Unique username          |
| email       | String    | User email               |
| password    | String    | Hashed password          |
| date_joined | DateTime  | Account creation time    |

### Plant Table

| Field          | Type       | Description                          |
|----------------|------------|--------------------------------------|
| id             | UUID       | Primary Key                          |
| user_id        | FK (User)  | Foreign key to User table            |
| name           | String     | Name of the plant                    |
| species        | String     | Plant species                        |
| image          | Image      | Uploaded photo of the plant          |
| date_planted   | Date       | Date when the plant was planted      |
| last_watered   | Date       | Last time the plant was watered      |
| next_watering  | Date       | Recommended next watering date       |
| notes          | Text       | Optional notes about the plant       |

### Recommendation Table (Optional / Future)

| Field       | Type        | Description                            |
|-------------|-------------|----------------------------------------|
| id          | UUID        | Primary Key                            |
| user_id     | FK (User)   | Foreign key to User table              |
| plant_id    | FK (Plant)  | Foreign key to Plant table             |
| message     | Text        | Recommendation content                 |
| created_at  | DateTime    | Time the recommendation was generated  |

**Relationships:**
- One `User` has many `Plants`  
- One `Plant` may have many `Recommendations`  
- Each `Recommendation` belongs to a specific `User` and `Plant`  

---

## API Routing by Model

### 🔐 User Authentication

| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| POST   | /signup/              | Register a new user                  |
| POST   | /api/token/           | Obtain JWT access & refresh tokens   |
| POST   | /api/token/refresh/   | Refresh JWT access token             |

---

### 🌱 Plant

| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| GET    | /plants/         | Get all plants (user-specific)   |
| POST   | /plants/         | Create a new plant entry         |
| PUT    | /plants/<id>/    | Update an existing plant         |
| DELETE | /plants/<id>/    | Delete a plant                   |

---

### 🧠 Recommendation (Optional / Future)

| Method | Endpoint            | Description                          |
|--------|---------------------|--------------------------------------|
| GET    | /recommendations/   | Get smart plant recommendations      |

---

### Frontend Features

- **Authentication**: The frontend handles JWT authentication, storing the token in localStorage or cookies, and includes functionality for login and registration.  
- **Plant Management**: Users can view, add, update, and delete plants from their profile.  
- **Recommendations**: Personalized plant care recommendations are fetched from the backend and displayed to the user.  
- **Image Upload**: Users can upload photos of their plants via the frontend, which are handled by the backend.  

### API Integration

The frontend interacts with the backend using the following API endpoints:

- `POST /api/token/` for user login and obtaining JWT tokens.  
- `POST /signup/` for user registration.  
- `GET /plants/` for retrieving all plants.  
- `POST /plants/` for adding a new plant.  
- `PUT /plants/<id>/` for updating a plant.  
- `DELETE /plants/<id>/` for deleting a plant.  
- `GET /recommendations/` for fetching plant care recommendations.  

## Recommendation System

The app provides personalized plant care tips. Future updates will include image-based disease detection using AI to further enhance plant health analysis.

## Ice Box

- AI-based image disease detection  
- Reminder system for watering and care  
- Multi-language support  

---

## Local: http://localhost:5173/

## Author

Developed by **Atha Alghamdi**
