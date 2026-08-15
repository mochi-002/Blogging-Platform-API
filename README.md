# Blogging Platform API

A small Express + TypeScript API for managing blog posts, backed by
MongoDB, with Joi request validation and a color-coded request logger.

A solution to the [roadmap.sh Blogging Platform API project](https://roadmap.sh/projects/blogging-platform-api).

## Requirements

- [Node.js](https://nodejs.org/) 18 or later
- npm
- A MongoDB instance (e.g. [MongoDB Atlas](https://www.mongodb.com/atlas))

## Installation

```bash
git clone https://github.com/mochi-002/Blogging-Platform-API.git
cd blogging-platform-api
npm install
npm run build
```

This compiles the TypeScript source into `dist/`. Run the server with:

```bash
node dist/server.js
```

> Tip: during development, `npm run dev` recompiles and restarts
> automatically on file changes.

## Environment variables

Create a `.env` file in the project root:

```txt
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

| Variable    | Description                                | Default |
| ----------- | ------------------------------------------ | ------- |
| `PORT`      | Port the server listens on                 | —       |
| `MONGO_URI` | Connection string for the MongoDB instance | —       |

## Seeding the database

To populate the database with sample posts across a few categories
(Technology, Programming, Database, Backend):

```bash
npm run seed
```

> Note: this clears the existing `posts` collection before inserting
> the sample data.

## Usage

### Create a post

```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Getting Started with TypeScript",
    "content": "TypeScript adds static typing to JavaScript.",
    "category": "Programming",
    "tags": ["TypeScript", "JavaScript"]
  }'
```

### Get all posts

```bash
curl "http://localhost:3000/posts"
```

Optionally filter with a search term matched against `title`,
`content`, and `category` (case-insensitive):

```bash
curl "http://localhost:3000/posts?term=typescript"
```

### Get a single post

```bash
curl "http://localhost:3000/posts/<id>"
```

### Update a post

```bash
curl -X PUT http://localhost:3000/posts/<id> \
  -H "Content-Type: application/json" \
  -d '{ "title": "Updated Title" }'
```

### Delete a post

```bash
curl -X DELETE http://localhost:3000/posts/<id>
```

Example post shape:

```json
{
  "_id": "665f1c2e8b3f4a0012a3c9d1",
  "title": "Getting Started with TypeScript",
  "content": "TypeScript adds static typing to JavaScript.",
  "category": "Programming",
  "tags": ["TypeScript", "JavaScript"],
  "createdAt": "2026-08-15T10:00:00.000Z",
  "updatedAt": "2026-08-15T10:00:00.000Z"
}
```

### Error responses

| Status | Meaning                                                   |
| ------ | --------------------------------------------------------- |
| `400`  | Validation failed, or the post ID is not a valid ObjectId |
| `404`  | Post not found, or the requested route does not exist     |
| `500`  | Unexpected internal error                                 |

## Validation rules

| Field      | Rules                                                      |
| ---------- | ---------------------------------------------------------- |
| `title`    | Required, string, 3–500 characters                         |
| `content`  | Required, string, minimum 3 characters                     |
| `category` | Required, string                                           |
| `tags`     | Optional array of strings, defaults to `["uncategorized"]` |

## Project structure

```txt
server.ts                        Entry point — sets up Express, middleware, and routes
config/db.ts                     MongoDB connection setup via Mongoose
controllers/post.controller.ts   Request handlers for CRUD operations on posts
models/post.model.ts             Mongoose schema and Joi validation for posts
routes/post.router.ts            Route definitions for /posts
middleware/logger.middleware.ts  Color-coded console logger
middleware/errors.middlewares.ts 404 handler, error handler, and ObjectId validation
seeders/posts.seeder.ts          Seeds the database with sample posts
```

## Testing

```bash
curl "http://localhost:3000/posts"
curl -X POST http://localhost:3000/posts -H "Content-Type: application/json" -d '{}'   # -> 400, validation error
curl "http://localhost:3000/posts/000000000000000000000000"                            # -> 404, post not found
```
