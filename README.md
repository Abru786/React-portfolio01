Abru Portfolio (React + Vite)

A small, responsive personal portfolio built with React, Vite and Bootstrap. The project demonstrates a modern single-page layout with animated backgrounds, routing, and reusable components.

## Features

- Responsive layout with Bootstrap and custom CSS
- Client-side routing using React Router
- Animated particle background via [`react-tsparticles`](package.json)
- Reusable components: [`Navbar`](src/components/Navbar.jsx), [`Home`](src/components/Home.jsx), [`About`](src/components/About.jsx), [`Projects`](src/components/Projects.jsx), [`Education`](src/components/Education.jsx), [`Contact`](src/components/Contact.jsx)
- Static assets served from `public/images`

## Tech Stack

- React 19
- Vite
- Bootstrap 5
- react-router-dom
- react-tsparticles / tsparticles
- react-icons

See project dependencies in [package.json](package.json) and configuration in [vite.config.js](vite.config.js).

## Quick start

Prerequisites:

- Node.js (>= 16) and npm

Install and run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Important files

- App entry: [index.html](index.html) → [src/main.jsx](src/main.jsx)
- Root component: [`App`](src/App.jsx)
- Global styles: [src/index.css](src/index.css), [src/App.css](src/App.css)
- Components:
  - [`Navbar`](src/components/Navbar.jsx) (+ styles: [src/components/styles/Navbar.css](src/components/styles/Navbar.css))
  - [`Home`](src/components/Home.jsx) (+ styles: [src/components/styles/Home.css](src/components/styles/Home.css))
  - [`About`](src/components/About.jsx) (+ styles: [src/components/styles/About.css](src/components/styles/About.css))
  - [`Projects`](src/components/Projects.jsx) (+ styles: [src/components/styles/Projects.css](src/components/styles/Projects.css))
  - [`Education`](src/components/Education.jsx) (+ styles: [src/components/styles/Education.css](src/components/styles/Education.css))
  - [`Contact`](src/components/Contact.jsx) (+ styles: [src/components/styles/Contact.css](src/components/styles/Contact.css))
- Vite config: [vite.config.js](vite.config.js)
- Package manifest: [package.json](package.json)

## Assets

- Profile image used by [`Home`](src/components/Home.jsx) is in [src/assets](src/assets)
- Project images used by [`Projects`](src/components/Projects.jsx) are in [public/images](public/images)

## Notes & Tips

- External links in [`Contact`](src/components/Contact.jsx) should include full protocols (e.g., `https://`) for correct navigation.
- To add more projects, edit the array in [`Projects`](src/components/Projects.jsx).
- Particle options are configured inside [`App`](src/App.jsx) — tweak `react-tsparticles` settings there.

## License

MIT — feel free to reuse and adapt.

## Maintainer

Project created by Abrar.
