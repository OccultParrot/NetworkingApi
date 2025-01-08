# Social Network API

## Description

A robust backend API for a social networking platform built using MongoDB, Express.js, and Mongoose ODM. This API allows users to share thoughts, react to friends' thoughts, and create a friend list. The application leverages MongoDB's efficient handling of large amounts of unstructured data, making it an ideal choice for social network applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Ensure MongoDB is installed on your machine
2. Clone the repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Usage

After starting the server, you can use Insomnia or any API client to test the available endpoints. The API provides comprehensive routes for managing users, thoughts, reactions, and friend lists.

## Features

- User Management:
  - Create, read, update, and delete users
  - Add and remove friends from a user's friend list
  - Automatic friend count tracking

- Thought Management:
  - Create, read, update, and delete thoughts
  - Automatic timestamp formatting
  - Character limit enforcement (1-280 characters)

- Reaction System:
  - Add and remove reactions to thoughts
  - Automatic timestamp formatting
  - Character limit enforcement (280 characters maximum)

## API Routes

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

### Friends
- `POST /api/users/:userId/friends/:friendId` - Add friend
- `DELETE /api/users/:userId/friends/:friendId` - Remove friend

### Thoughts
- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:id` - Get single thought by ID
- `POST /api/thoughts` - Create new thought
- `PUT /api/thoughts/:id` - Update thought by ID
- `DELETE /api/thoughts/:id` - Delete thought by ID

### Reactions
- `POST /api/thoughts/:thoughtId/reactions` - Create reaction
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove reaction

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JavaScript Date object for timestamp formatting

## Demo

[Link to Video Demonstration](your-video-link-here)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
