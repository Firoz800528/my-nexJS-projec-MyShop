# MyShop - Next.js E-Commerce Project

A **full-stack e-commerce application** built with Next.js 13 (App Router), NextAuth for authentication, MongoDB for data storage, and Tailwind CSS for styling. The app supports **dark/light mode**, **Google login**, and product management features (add/view products).  

---

## 🚀 Features

- Landing page with **Hero section** and **Product Highlights**.
- **Protected Add Product form** (requires login).
- **Google Authentication** using NextAuth.
- **Products page**: view all products from MongoDB.
- **Product Details page**: view full product information.
- **Toast notifications** for successful product actions.
- **Loading spinner** while submitting forms.
- Fully responsive with Tailwind CSS.
- Deployed on **Vercel**.

---

## 🔗 Pages & Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with Hero, Product Highlights, Navbar, Footer |
| `/products` | Public | All products page |
| `/products/[id]` | Public | Product Details page |
| `/add-product` | Protected | Add new product (requires login) |
| `/login` | Public | Login page using Google |

---

## ⚡ Technologies Used

- [Next.js 15](https://nextjs.org/)
- [React](https://reactjs.org/)
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [MongoDB](https://www.mongodb.com/) for database
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [react-hot-toast](https://react-hot-toast.com/) for notifications
- [Vercel](https://vercel.com/) for deployment

---

## 🛠 Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/Firoz800528/my-nexJS-projec-MyShop.git
cd my-nexJS-projec-MyShop
