# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

A full-stack virtual art gallery project that allows users to browse and view art pieces, create their own collections, and interact with other users.

Table of Contents

Introduction

Features

Technologies Used

Getting Started

API Endpoints

Database Schema

Contributing

Introduction: The Virtual Art Gallery is a full-stack project that allows users to browse and view art pieces, create their own collections, and interact with other users. The project is built using HTML, CSS, JS, React.js, Node.js, and MySQL Workbench.

Features Browse and view art pieces by category or artist Create and manage collections of art pieces Search for art pieces by title, artist, or category Interact with other users by leaving comments and ratings on art pieces User authentication and authorization using JWT

Technologies Used HTML, CSS, and JS for the frontend React.js for the frontend framework Node.js for the backend server MySQL Workbench for the database JWT for user authentication and authorization IDE WebStrome

The Virtual Art Gallery project has the following API endpoints: app.post("/category", adminController.AddCategory); app.get("/category", adminController.ReadCategory); app.delete("/category/:id", adminController.DeleteCategory); app.post("/admin-login", adminController.AdminLogin) app.post('/change-password', adminAuthorization_HTTP_Request, adminController.AdminChangePassword); app.post('/user-signup', userController.UserSignup) app.post('/user-login', userController.UserSingIn) app.post('/artist-signup', artistController.ArtistSignup); app.post('/artist-login', artistController.ArtistLogin); app.get('/manage-artist', artistController.ShowData); app.get('/manage-art-work', artistController.Showartwork); app.post('/manage-artist', artistController.UpdateStatus) app.post('/manage-art-work', artistController.ManageArtWork)

Database Schema The Virtual Art Gallery project has the following database schema:

users_signup table: Stores user information id: Integer, primary key, auto-increment fullname: String, unique email: String, unique password: String mobile: number address: string city: string state: string

category: stores art category id: Integer, primary key, auto-increment categoryname: string

admin: stores admin info id: Integer, primary key, auto-increment email: string password: number fullname: string

artits : store the info of artist id: Integer, primary key, auto-increment fullname: string email: string password: number photo: file gender: string mobile: number bio: string status: string

artwork: store artwork id: Integer, primary key, auto-increment category_id: int title: string description: string price: number discount: number artist_id: int photo: file

Screenshot (225)

Screenshot (226)

![Screenshot (227)](https://github.com/Smilepreet75/VirtualArtGallery/assets/146861547/4837e21c-6d3a-47fd-a1f6-23a7ebc30cdc

Screenshot (228)

Screenshot (229)

Screenshot (230)

![image](https://github.com/Smilepreet75/Virtual_Art_Gallery/assets/146861547/24c9ff03-88c4-4bae-9d2e-58c74c96de13)

