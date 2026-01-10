# Abhishek Mohanty — Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwindcss)
![Express](https://img.shields.io/badge/Express-5.0-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![License](https://img.shields.io/badge/License-Custom-blue)

A modern, responsive developer portfolio built with Next.js 16 and Express.js.

---

## ✨ Features

- **Modern UI** — Glassmorphism, animations, dark mode
- **Responsive** — Mobile-first design
- **Contact Form** — Backend API with rate limiting & email notifications
- **SEO Optimized** — Structured data, meta tags
- **Performance** — Server components, optimized images

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion |
| **Backend** | Node.js, Express 5, MongoDB, Mongoose, Zod |
| **Email** | Resend |
| **Deployment** | Vercel (client), Render (server) |

---

## 📁 Project Structure

```
portfolio/
├── client/          # Next.js frontend
│   ├── src/
│   │   ├── app/           # App router pages
│   │   └── components/    # React components
│   └── public/            # Static assets
├── server/          # Express backend
│   └── src/
│       ├── config/        # Environment & DB config
│       ├── controllers/   # Request handlers
│       ├── models/        # Mongoose schemas
│       ├── routes/        # API routes
│       └── services/      # Email service
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- pnpm
- MongoDB Atlas account

### Installation

```bash
# Clone the repository
git clone https://github.com/nawseekhiya/portfolio.git
cd portfolio

# Install client dependencies
cd client && pnpm install

# Install server dependencies
cd ../server && pnpm install
```

### Environment Setup

**Client** (`client/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Server** (`server/.env`):
```env
PORT=5000
CLIENT_ORIGIN=http://localhost:3000
MONGODB_URI=your_mongodb_uri
RESEND_API_KEY=your_resend_key
NOTIFICATION_EMAIL=your_email
```

### Run Development

```bash
# Terminal 1 - Start backend
cd server && pnpm dev

# Terminal 2 - Start frontend
cd client && pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📬 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Health check |
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/contact` | List contacts (admin) |

---

## 📄 License

This project is **open-sourced with restrictions**.

- All rights are reserved by the core team.
- You are free to use or adapt the code, but **must credit the original authors**.
- Contributions are welcome and will be **acknowledged**, but do not grant ownership or redistribution rights.
- Redistribution or commercial use without explicit permission is **not allowed**.
- You may not use the code in any way that could be considered **derivative** or **commercial** without explicit permission from **Abhishek Mohanty**.  
  Read more at [LICENSE.md](./LICENSE.md).
