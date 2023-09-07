# Node.Js - URL Params Workshop

## 🦊 Pre-lecture

⏲️ _Estimated time required: 30 minutes._

- [How to Get URL Parameters with JavaScript](https://www.sitepoint.com/get-url-parameters-with-javascript/)

---

## 🦉 Lecture

- [Lecture 1 | Housekeeping](./lecture/lecture-1-housekeeping.md)
- [Lecture 2 | URL Parameters](./lecture/lecture-2-url-params.md)
- [Lecture 3 | Insomnia](./lecture/lecture-3-insomnia.md)

---

## Setup

Today's workshop is a _**full stack**_ workshop. You'll need 2 active terminals to be able to run this workshop as intended.

### The Frontend (website):
1. Open a terminal.
2. Navigate to the `client` folder by typing `cd client`.
3. Install the dependencies with `yarn install`.
4. Boot React with `yarn start`.

### The Backend (server):
1. Open a **new** terminal (you can use a split terminal if you want).
2. Navigate to the `server` folder by typing `cd server`.
3. Install the dependencies with `yarn install`.
4. Boot the server with `yarn start:server`.

After following these steps, you should have 2 terminals. One should be running React, and the other should be running the server.

---

## ⚡ Exercises

For this part of the workshop, you won't use the frontend at all. Follow the instructions, and once you finish exercise 5, you will have a functioning backend that will just work with the frontend.

### [Exercise 1](workshop/exercise-1.md) - `/top50` endpoint

### [Exercise 2](workshop/exercise-2.md) - `GET`ting a specific song

### [Exercise 3](workshop/exercise-3.md) - `GET`ting songs by a specific artist

### [Exercise 4](workshop/exercise-4.md) - The Most popular artist is...

### [Exercise 5](workshop/exercise-5.md) - Array of Artists

---

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

## Upgrading the Frontend

If you start up the FE and go to `http://localhost:3000`, you should have a functional app. It still needs a little love, but overall it should work.

This is what you see on the homepage.

![homepage](./lecture/assets/homepage.png)

Take a look through the `frontend` folder at the all of the code that is already written. 

There are still a few components to create to get a fully functional site.

### [Exercise 6](workshop/exercise-6.md) - Render the top 50 songs

### [Exercise 7](workshop/exercise-7.md) - Render the songs by the most popular artist

### [Exercise 8](workshop/exercise-8.md) - Render the songs on each artist's page

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---
