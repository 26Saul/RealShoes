# RealShoes – Modern Shoe Store Landing Page 👟

[![React 19](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev)
[![Vite 7](https://img.shields.io/badge/Vite-7-purple?logo=vite&logoColor=white)](https://vite.dev)
[![Status](https://img.shields.io/badge/Status-In%20progress-orange)]()

RealShoes is a web application built with React and Vite that simulates an online shoe store.
The project includes a main page with featured products, navigation between sections, a real-time community page, and administration tools for importing and exporting products in multiple formats.

## Table of Contents

- [About The Project](#about-the-project)
- [Main Features](#main-features)
- [Import and Export](#import-and-export)
- [Community](#community)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [RSS](#rss)
- [Getting Started](#getting-started)

## About The Project

RealShoes simulates the front page of an online shoe store with a modern interface, navigation sections, product cards, a community page, and administration tools for importing and exporting products.

The goal of the project is to practice development with React, client-side routing with `react-router-dom`, integration with Firebase (Firestore and Realtime Database), and data management in multiple formats.

## Main Features

- Main page with RealShoes brand visual presentation.
- Navigation between different pages of the application using React Router DOM.
- Interactive map integrated with React Leaflet and OpenStreetMap.
- Community page connected to Firebase Realtime Database.
- Product management with Firebase Firestore.
- Product import from CSV, JSON and XML files.
- Dynamic product export to CSV, JSON and XML formats.
- Interactive map integration.
- RSS feeds for notices and offers.

## Import and Export

The application includes a dedicated import and export page located at the `/import-export` route.

### Import

Allows uploading product data files in the following formats:

- `datos.csv`
- `datos.json`
- `datos.xml`

When the user uploads one of these files, the application processes its content and saves the products to Firebase Firestore.

### Export

The application also allows exporting dynamically generated data with the current information stored in the products collection.

Available export formats:

- `datos.csv`
- `datos.json`
- `datos.xml`

This functionality fulfills the requirement of generating files dynamically from existing data in the application.

### Example Files

To test the import feature, example files are included in the `public/examples/` folder of the repository:

- `datos.csv`
- `datos.json`
- `datos.xml`

These files are designed to be used directly from the import/export page.

## Community

The community page allows users to share reviews, questions, updates and deals.

### Available Categories

- **Reviews** – Purchase opinions and experiences.
- **Updates** – News about the store and products.
- **Help** – Community questions and queries.
- **Offers** – Shared promotions and discounts.

### Features

- Create new posts.
- Edit your own posts.
- Delete posts.
- Filter by category.
- Real-time data with Firebase Realtime Database.

## Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | User interface |
| Vite | 7 | Bundler and dev server |
| React Router DOM | – | Client-side routing |
| Firebase | – | Backend as a service |
| Firestore | – | Products database |
| Realtime Database | – | Community database |
| React Leaflet | – | Interactive map |
| Leaflet | – | Map rendering engine |
| OpenStreetMap | – | Map tiles |

## Project Structure
src/
├── components/ Reusable components
├── pages/
│ ├── community/ Community page
│ └── ImportExport/ Import and export page
├── services/
│ └── firebase/ Firebase configuration and services
├── utils/
│ ├── csv.js CSV parser and generator
│ ├── json.js JSON parser and generator
│ ├── xml.js XML parser and generator
│ └── download.js File download utility
└── App.jsx Root component and routes

Firebase access is centralized in the `services` folder, fulfilling the project requirement.
Pages and components do not access Firebase directly, but use specific service functions instead.

## Deployment

Project deployed on Firebase Hosting:

[https://realshoes-ab18c.web.app](https://realshoes-ab18c.web.app)

## RSS

Notice RSS Feed:
[https://realshoes-ab18c.web.app/rss.xml](https://realshoes-ab18c.web.app/rss.xml)

Offer RSS Feed:
[https://realshoes-ab18c.web.app/rssOffer.xml](https://realshoes-ab18c.web.app/rssOffer.xml)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/26Saul/RealShoes.git
```

2. Enter the project folder:

```bash
cd RealShoes
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root of the project with the Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=realshoes-ab18c.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://realshoes-ab18c-default-rtdb.europe-west1.firebasedatabase.app
VITE_FIREBASE_PROJECT_ID=realshoes-ab18c
VITE_FIREBASE_STORAGE_BUCKET=realshoes-ab18c.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

5. Run the project locally:

```bash
npm run dev
```