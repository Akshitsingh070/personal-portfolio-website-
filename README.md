# Personal Portfolio Website

This is a modern, responsive personal portfolio website built to showcase projects, skills, real-time GitHub activity, and a working contact form.

## 🏗️ Architecture Overview

A common question is: **"Where is the backend and database?"**
This application is designed as a **Static Frontend Application** (Serverless). This means there is NO dedicated backend server (like Node/Express) and NO traditional database (like MongoDB or SQL) holding your data. 

Instead of building a complex backend, the application intelligently relies on **3rd-Party APIs** and **Static Data Files** to handle data dynamic content. This makes the website incredibly fast, secure, and free to host!

Here is how everything works:

### 1. The Frontend (UI & Logic)
- **Framework:** Built with **React** + **TypeScript**.
- **Build Tool:** Powered by **Vite** for extremely fast local development and optimized production builds.
- **Styling:** Uses **Tailwind CSS** for modern, utility-first styling.
- **Components:** Built using **shadcn/ui** (which utilizes Radix UI primitives) to create accessible, beautiful components like buttons, input fields, and toast popups.
- **Animations:** Uses **Framer Motion** for smooth scroll effects and dynamic page transitions.
- **Analytics:** Integrated with `@vercel/analytics` to track website visitors and page views without needing heavy tracking scripts.

### 2. The "Database" (Data Management)
Since there is no SQL or MongoDB database, the site's permanent data is stored in a clean, local configuration file.
- **Static CMS (`src/data/portfolio.ts`):** This file acts as the central database for the portfolio. Your curated "Featured Projects", custom "Skills Categories", and "Social Media Links" are all exported from here and dynamically loaded into your UI components. If you want to add a new project, you just add it to this file!

### 3. The Backend Alternatives (APIs & Services)
To simulate backend functionality, the site securely hooks into external APIs:

- **Email Routing (Web3Forms):** 
  Normally, a contact form requires an Express backend to receive the data and an SMTP server to send the email. Instead, this project uses **Web3Forms**. The frontend makes a `fetch` POST request securely sending the user's message to the Web3Forms API, which acts as the "backend" and forwards the message straight to your personal Gmail.
- **Live Activity (GitHub API):** 
  The `GitHubActivity` section uses the `useGitHubData.ts` React Hook to query the public GitHub API (`https://api.github.com/users/Akshitsingh070`). Every time the page loads, your frontend asks GitHub for your live follower counts, repositories, and a rendered graph of your daily commits!

---

## 🚀 How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Environment Variables:**
   Make sure you have your `.env` file correctly configured at the root of your project:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
4. **Build for Production:**
   ```bash
   npm run build
   ```
