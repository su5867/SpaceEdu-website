# SpaceEdu

SpaceEdu is a modern, single-page-inspired static website for an astronomy learning platform. It presents a cinematic educational brand focused on learning about planets, tuition plans, tutorials, and blog content.

## Overview

This project includes:

- A landing page for the SpaceEdu brand and planet learning experience
- Tuition and pricing plans with a monthly/yearly toggle
- Filterable tutorials by planet
- Searchable blog posts
- Responsive navigation for mobile devices
- Lightweight JavaScript and CSS animations for a polished UI

## Project Structure

```text
spaceedu/
├── app.js              # Shared interactions for nav, reveal animations, and page behavior
├── blog.html           # Blog page with category filters and search
├── index.html          # Homepage/planet landing page
├── styles.css          # Shared design system and styling
├── tuition.html        # Tuition plans page with pricing toggle
├── tutorials.html      # Tutorial grid with planet-based filtering
└── README.md           # Project documentation
```

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- No framework or build tooling required

## Features

### Homepage
- Hero section with cinematic space styling
- Animated navigation and call-to-action design
- Planet switching visuals and smooth scroll behavior

### Tuition Page
- Pricing table with monthly and yearly billing options
- FAQ section
- Responsive layout for smaller screens

### Tutorials Page
- Filter cards by Earth, Venus, and Mars
- Lesson cards with duration and metadata
- Empty-state message when a filter produces no results

### Blog Page
- Category filters
- Live search across posts
- Responsive article list layout

## Run Locally

Because this is a static site, you can run it in any of the following ways:

### Option 1: Open directly in a browser
- Open `index.html` directly in your browser.

### Option 2: Use a local web server
From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Customization

- Edit `index.html` to change the homepage copy and layout.
- Update `styles.css` to change colors, spacing, typography, and responsive styles.
- Modify `app.js` to adjust menu behavior or scroll-reveal interactions.
- Update the tuition/tutorial/blog pages individually to tailor content or pricing.

## Notes

This project is built as a static website demo and does not require a backend or database.

## License

This project does not currently specify a license. Use it as a reference or starting point for personal or educational projects unless otherwise noted.
