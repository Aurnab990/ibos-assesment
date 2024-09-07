# FurniFlex - Furniture E-Commerce Platform

Welcome to **FurniFlex**, a modern furniture e-commerce platform built with ReactJS, TailwindCSS, and Firebase. This application allows users to browse products, manage a shopping cart, and handle user authentication seamlessly.

## Issue
After deploying I see my product listing align is changed. I give it 3 items in a row, but after deploying it shows ok, but after a few minutes it's change the align and list 2 items in a row. So I waorking on that but for time issue, I requested to consider this time.

## Live Demo

You can check out the live application here: [FurniFlex Live Demo](https://furniflexibos.netlify.app/)

## Features

### 1. **Login & Sign Up**
   - **Objective:** Implement user authentication.
   - **Requirements:**
     - Users can sign up and log in.
     - Context API is used to manage the global authentication state.
     - Session-based state management ensures users remain logged in until they log out.

### 2. **Product Listing**
   - **Objective:** Display a list of products.
   - **Requirements:**
     - Fetch product data from a local JSON file or API.
     - Manage product list state using Context API.

### 3. **Add to Cart**
   - **Objective:** Enable users to add products to a shopping cart.
   - **Requirements:**
     - Implement functionality to add and remove products from the cart.
     - Use Context API to manage cart state.
     - Dynamic cart updates as products are added or removed.

### 4. **Cart Management**
   - **Objective:** Manage items within the cart.
   - **Requirements:**
     - Users can adjust product quantities or remove items from the cart.
     - Cart state updates in real-time using Context API.

## Technologies Used

- **ReactJS**: Frontend library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **CSS**: Additional styling for custom components.
- **Firebase**: Backend service for authentication and real-time database.
- **Context API**: For global state management of authentication and cart.

## Setup and Installation

To get started with the project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/furniflex.git
   cd furniflex
