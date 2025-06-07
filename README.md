# Dunso Todo API

Dunso Todo API is a Node.js application designed to manage tasks, habits, and user contexts. It provides a RESTful API for users to create, update, and manage their tasks and habits, while also allowing for user authentication and license management.

## Features

- User authentication with email and social media (Google, Facebook)
- Management of user profiles
- Context management for organizing tasks and habits
- Task and habit management under specific contexts
- Category management for tasks and habits
- License management for user tiers (free and paid)

## Technologies Used

- Node.js
- Express.js
- PostgreSQL (RDS)
- Sequelize (ORM)
- JWT for authentication
- GitHub Actions for CI/CD

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- AWS account for Elastic Beanstalk and RDS

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/dunso-todo-api.git
   cd dunso-todo-api
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` template and configure your environment variables.

4. Set up your PostgreSQL database on AWS RDS and update the database connection settings in the `.env` file.

### Running the Application

To start the application locally, run:

```
npm start
```

The API will be available at `http://localhost:3000`.

### API Endpoints

- **Authentication**
  - `POST /api/auth/signup` - Sign up a new user
  - `POST /api/auth/login` - Log in an existing user

- **User Management**
  - `GET /api/users/:id` - Get user profile
  - `PUT /api/users/:id` - Update user profile

- **Context Management**
  - `POST /api/contexts` - Create a new context
  - `GET /api/contexts/:id` - Get context details

- **Task Management**
  - `POST /api/tasks` - Create a new task
  - `GET /api/tasks/:id` - Get task details

- **Habit Management**
  - `POST /api/habits` - Create a new habit
  - `GET /api/habits/:id` - Get habit details

- **Category Management**
  - `POST /api/categories` - Create a new category
  - `GET /api/categories/:id` - Get category details

- **License Management**
  - `GET /api/licenses/:userId` - Get license information for a user

### Deployment

This application is configured to be deployed on AWS Elastic Beanstalk. The deployment process is automated using GitHub Actions. Every time you push to the `main` branch, the application will be deployed automatically.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.