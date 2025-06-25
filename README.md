# 🍲 Recipe Book App - Client

## 🌐 Live Site

🔗 [View Live Project](https://recipe-book-app-45653.web.app)

## 📌 Project Overview

The Recipe Book App is a fully-featured recipe sharing platform. Users can browse top recipes, add their own, like recipes, and manage their personal collection. It includes animations, tooltips, dark/light mode, and secure access through Firebase authentication.

---

## 🚀 Features

- 🔐 **Authentication**: Email/password & Google login via Firebase.
- 🔒 **Protected Routes**: Add Recipe, My Recipes, Recipe Details are accessible only to authenticated users.
- 🌐 **Top Recipes Display**: Shows top 6 most liked recipes dynamically from MongoDB.
- 📱 **Responsive Design**: Mobile-first responsive layout.
- 🌓 **Dark/Light Mode Toggle**.
- 💾 **Like Button**: Incremental like functionality (client-controlled or server-integrated).
- 🍽️ **Filter by Cuisine Type**.
- 🎬 **React-simple-typewriter** and 🎯 **React Tooltips**.
- ✅ **Toast Notifications** and 🎉 **SweetAlert2** confirmations.

---

## 🛠️ Run Locally

1. Clone the project

```bash
git clone https://github.com/FajlaRabby24/recipe-book.git
```

---

## 🛠️ Tech Stack

### Frontend:

- **React 19**
- **React Router v7**
- **Tailwind CSS** + **DaisyUI**
- **Vite**
- **Firebase Auth**
- **React-simple-typewritert**, **React-toastify**, **SweetAlert2**, **React-tooltip**, **React-icons**

### Animations & Utilities:

- **Motion**
- **Date-fns**
- **React Simple Typewriter**

---

## 🔐 Environment Variables

Create a `.env` file and add the following Firebase keys:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
VITE_root_api_url=server-site-link
```
