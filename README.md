# Next.js Authentication App

A modern authentication system built with Next.js 15, featuring user registration, login, protected routes, and user profile management with notes functionality.

## 🚀 Demo

[Live Demo](https://your-demo-link.vercel.app)

## 📋 Description

This project demonstrates a complete authentication flow in Next.js using App Router. It implements secure user authentication with access and refresh tokens, protected routes using middleware, and a notes management system for authenticated users. The application showcases modern React patterns and Next.js best practices for building secure web applications.

## ✨ Features

- 🔐 User registration and login
- 🔄 Token-based authentication (access & refresh tokens)
- 🛡️ Protected routes with middleware
- 👤 User profile management
- 📝 Notes CRUD functionality for authenticated users
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🔔 Toast notifications for user feedback
- ⚡ Pagination for notes list
- 🔍 Debounced search functionality

## 🛠️ Technologies

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **State Management:** Zustand
- **HTTP Client:** Axios
- **UI Components:**
  - React Hot Toast (notifications)
  - React Paginate (pagination)
- **Data Fetching:** React Query integration
- **Utilities:** use-debounce

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/helen-akateva/nextjs-auth-demo.git
cd nextjs-auth-demo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
├── app/
│   ├── (auth routes)/     # Authentication pages (sign-in, sign-up)
│   ├── (private routes)/  # Protected pages (profile, notes)
│   ├── @modal/            # Parallel routes for modals
│   └── api/               # API routes
├── components/            # Reusable React components
├── lib/                   # Utility functions and API clients
├── types/                 # TypeScript type definitions
└── middleware.ts          # Route protection logic
```

## 🔒 Authentication Flow

The application uses a token-based authentication system:
- Users receive access and refresh tokens upon login
- Middleware automatically refreshes expired access tokens
- Protected routes redirect unauthenticated users to sign-in
- Authenticated users cannot access public auth routes

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The application is deployed on Vercel.

## 👩‍💻 Author

**Olena Akatieva**

- LinkedIn: [linkedin.com/in/olena-akatieva](https://linkedin.com/in/olena-akatieva)
- GitHub: [@helen-akateva](https://github.com/helen-akateva)

## 📄 License

This project is open source and available under the MIT License.
