# 🎬 Express Movie Site

A server-side rendered (SSR) movie web application built with **Node.js**, **Express.js**, and **EJS**. The application delivers dynamic movie content through server-rendered pages, utilizing a modular architecture, reusable templates, and efficient request handling.

Designed with a focus on scalability, maintainability, and clean separation of concerns, the project demonstrates modern backend development practices using the Express ecosystem.

---

## 🚀 Features

### 🎥 Movie Catalog

* Browse a collection of movies
* View detailed information for individual movies
* Dynamic page rendering based on route parameters
* Responsive and user-friendly interface

### ⚡ Server-Side Rendering

* Dynamic HTML generation using EJS templates
* Improved SEO through server-rendered content
* Fast initial page loads
* Reduced client-side complexity

### 🛣️ Routing System

* Modular route organization with Express Router
* Dynamic movie detail pages
* Centralized navigation and endpoint management

### 🔧 Middleware Architecture

* Request processing pipeline
* Static asset serving
* Error handling and fallback pages
* HTTP request and response management

### 🎨 Reusable UI Components

* Shared layout partials
* Reusable navigation component
* Common metadata templates
* Consistent structure across all pages

---

## 🛠️ Tech Stack

| Category        | Technology                  |
| --------------- | --------------------------- |
| Runtime         | Node.js                     |
| Framework       | Express.js                  |
| Template Engine | EJS                         |
| Styling         | CSS3                        |
| Architecture    | Server-Side Rendering (SSR) |

---

## 📁 Project Structure

```text
.
├── bin/
│   └── www                  # HTTP server bootstrap
│
├── routes/
│   └── index.js             # Application routes
│
├── views/
│   ├── index.ejs            # Home page
│   ├── single-movie.ejs     # Movie details page
│   ├── head.ejs             # Shared head partial
│   ├── navbar.ejs           # Shared navigation partial
│   └── error.ejs            # Error page template
│
├── public/
│   ├── css/                 # Stylesheets
│   └── images/              # Static assets
│
├── app.js                   # Express application setup
├── config.js                # Application configuration
├── package.json             # Dependencies and scripts
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Before running the application, ensure you have:

* Node.js (v16 or higher)
* npm

Verify installation:

```bash
node -v
npm -v
```

### Installation

Clone the repository:

```bash
git clone https://github.com/andriibabiuk/express-movie-site.git
cd express-movie-site
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

For development:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 🏗️ Architecture Highlights

### HTTP Request Lifecycle

* Request parsing and processing
* Route matching and execution
* Dynamic template rendering
* Response generation and delivery

### Middleware Pipeline

* Static asset middleware
* Request preprocessing
* Error handling middleware
* Response finalization

### Template Composition

* Reusable EJS partials
* Shared layouts and components
* Separation of presentation and business logic
* Maintainable view structure

### Routing Strategy

* Modular Express Router configuration
* Dynamic route parameters
* Clean URL structure
* Centralized route management

---

## 🎯 Key Capabilities

* Server-side rendering with EJS
* Dynamic route handling
* Modular Express architecture
* Reusable UI components
* Static asset management
* Error handling and fallback views
* Maintainable project structure
* SEO-friendly page rendering
