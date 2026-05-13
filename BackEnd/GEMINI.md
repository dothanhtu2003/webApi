# Task Manager API

REST API quản lý công việc cá nhân, xây dựng bằng NestJS + TypeScript.

## Tech Stack
- **Framework:** NestJS + Express
- **Language:** TypeScript
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** JWT (access token), bcrypt hash password
- **Docs:** Swagger tại /api

## Cấu trúc thư mục
src/
├── auth/        # Đăng ký, đăng nhập, JWT strategy
├── users/       # User module
├── tasks/       # Task CRUD
├── prisma/      # PrismaService
└── main.ts

## Conventions
- DTO dùng class-validator để validate input
- Response lỗi theo format: { statusCode, message, error }
- Mỗi module có folder riêng: module / controller / service / dto

## Chạy local
npm run start:dev     # Port 3000
# Cần file .env với DATABASE_URL và JWT_SECRET