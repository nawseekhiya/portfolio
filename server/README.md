# Portfolio Backend API

Node.js + Express backend for the portfolio contact form.

## Quick Start

```bash
# Install dependencies
pnpm install

# Create .env file
cp .env.example .env

# Start development server
pnpm dev
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Server port (default: 5000) |
| `NODE_ENV` | No | Environment (default: development) |
| `CLIENT_ORIGIN` | No | Frontend URL for CORS (default: http://localhost:3000) |
| `MONGODB_URI` | Yes | MongoDB Atlas connection string |
| `RESEND_API_KEY` | No | Resend API key for email notifications |
| `NOTIFICATION_EMAIL` | No | Email to receive contact notifications |

## API Endpoints

### Health Check
```
GET /health
```
Returns server status.

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "string (required, 2-100 chars)",
  "email": "string (required, valid email)",
  "subject": "string (required, 5-200 chars)",
  "message": "string (required, 10-5000 chars)",
  "honeypot": "string (optional, must be empty)"
}
```

**Responses:**
- `201` - Success
- `400` - Validation error
- `429` - Rate limited (10 requests per 15 minutes)

### List Contacts (Admin)
```
GET /api/contact?status=new&page=1&limit=20
```

## Project Structure

```
server/
├── src/
│   ├── config/
│   │   ├── env.js          # Environment validation (Zod)
│   │   └── database.js     # MongoDB connection
│   ├── controllers/
│   │   └── contact.controller.js
│   ├── middleware/
│   │   └── rateLimiter.js  # Rate limiting
│   ├── models/
│   │   └── Contact.js      # Mongoose schema
│   ├── routes/
│   │   └── contact.js
│   ├── services/
│   │   └── email.service.js  # Resend integration
│   ├── validators/
│   │   └── contact.validator.js  # Zod schemas
│   ├── app.js              # Express app
│   └── index.js            # Entry point
├── .env.example
└── package.json
```

## Tech Stack

- **Runtime:** Node.js 20+
- **Framework:** Express.js 5
- **Database:** MongoDB Atlas + Mongoose
- **Validation:** Zod
- **Email:** Resend
- **Security:** Helmet, CORS, Rate Limiting

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start with hot reload |
| `pnpm start` | Start production server |
