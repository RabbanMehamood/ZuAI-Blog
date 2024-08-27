# ZuAI Blog Assignment

## Overview

The ZuAI Blog is a full-stack web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. The application is divided into a backend and a frontend, with the backend providing RESTful API services and the frontend providing the user interface for interacting with the blog.

## Patience
<p>The loading of components make take some time because of the render server wait for 30 to 50 secs.</p>

## URLs

* **Backend:** https://zuai-blog-backend.onrender.com/       
* **Frontend:** https://zuai-blog-frontend.onrender.com/

## Project Structure

### Backend

* **Framework:** Node.js with Express.js
* **Database:** MySQL
* **Environment Variables:** Managed using `.env` file
* **Deployed On:** Render.com

### Frontend

* **Framework:** React.js
* **UI Library:** Material-UI (MUI)
* **Routing:** React Router
* **HTTP Client:** Axios
* **Deployed On:** Render.com

## Features

* **List Posts:** Display a list of all blog posts with excerpts.
* **View Post Details:** View the full content of a single blog post.
* **Add New Post:** Create a new blog post.
* **Edit Post:** Update the content of an existing blog post.
* **Delete Post:** Remove a blog post.

## Setup Instructions

### Backend Setup

1. **Clone the Repository:**

   git clone https://github.com/RabbanMehamood/ZuAI-Blog   
   cd zuai-blog-backend

3. **Install Dependencies:**

   npm install

4. **Create .env File:**
   Create a `.env` file in the root directory with the following content:

   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=''
   DB_DB_NAME=zu_ai_blog
   DB_PORT=3306

5. **Run the Server:**

   npm start

   The server should now be running on http://localhost:3000.

### Frontend Setup

1. **Clone the Repository:**

   git clone https://github.com/RabbanMehamood/ZuAI-Blog
   
   cd zuai-blog-frontend

3. **Install Dependencies:**

   npm install

4. **Create .env File:**
   Create a `.env` file in the root directory with the following content:

   REACT_APP_API_URL=https://zuai-blog-backend.onrender.com/api/posts

5. **Run the Frontend:**

   npm start

   The frontend should now be running on http://localhost:3001.

## Deployment

### Backend Deployment

The backend is deployed on Render.com. Ensure that the environment variables are properly set in the Render dashboard.

### Frontend Deployment

The frontend is also deployed on Render.com. Ensure that the `.env` file is correctly configured with the deployed backend URL.

## Testing

### Postman

To test the API endpoints, you can use Postman:

* **GET /api/posts:** Fetch all posts.
* **GET /api/posts/:id:** Fetch a single post by ID.
* **POST /api/posts:** Create a new post.
* **PUT /api/posts/:id:** Update a post by ID.
* **DELETE /api/posts/:id:** Delete a post by ID.

## License

This project is licensed under the MIT License.
