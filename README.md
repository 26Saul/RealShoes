# RealShoes 👟

RealShoes is a modern e‑commerce landing page for a fictional shoe store, built with React and Vite.  
The site focuses on a clean UI, clear product presentation, and a simple contact flow with an interactive map.

---

## Table of Contents

- [About The Project](#about-the-project)
- [Main Page Description](#main-page-description)
- [Built With](#built-with)
- [Third‑Party Components](#third-party-components)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Helpful Tutorials & Resources](#helpful-tutorials--resources)
- [Roadmap / Future Improvements](#roadmap--future-improvements)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## About The Project

RealShoes simulates the front page of an online shoe store, including a hero section, product cards, navigation, footer with social links, and a contact section with an embedded map.  
The goal of the project is to practice React component structure, routing with `react-router-dom`, and integration of external libraries such as React Leaflet for maps. [file:5][web:81]

---

## Main Page Description

The main page presents a hero section highlighting the RealShoes brand and its key value proposition (quality footwear with a modern look).  
Below the hero, users can scroll through featured products, see prices and short descriptions, and navigate to other sections such as contact or legal pages.  
The footer includes social media icons, links to the GitHub repository, the Figma design, and quick navigation back to the home page. [file:5]

---

## Built With

- React 19 (frontend UI components) [file:1][file:19]  
- Vite (development server and bundler) [file:5]  
- React Router DOM (client‑side routing) [file:1][file:19]  
- React Leaflet + Leaflet (interactive map integration) [file:1][file:19][web:81]  
- OpenStreetMap tiles (map data provider) [web:82][web:85]

---

## Third-Party Components

This project uses the following third‑party libraries and services:

- **React Leaflet** – React bindings for the Leaflet mapping library, used to render the interactive map with `MapContainer`, `TileLayer`, `Marker`, and `Popup`.  
  - Docs: https://react-leaflet.js.org [web:81]  

- **Leaflet** – Lightweight open‑source JavaScript library for interactive maps.  
  - Website: https://leafletjs.com [web:85]  

- **OpenStreetMap Tiles** – Free map tiles used in the `TileLayer` component (`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`).  
  - Info & usage policy: https://www.openstreetmap.org/copyright [web:82][web:85]  

- **React Router DOM** – Handles navigation between pages such as Home, Privacy Policy, and Terms.  
  - Repo: https://github.com/remix-run/react-router [file:1][file:19]

---

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js (recommended LTS version)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/26Saul/RealShoes.git
