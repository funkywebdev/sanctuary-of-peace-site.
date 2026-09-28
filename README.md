# English Chapel Sanctuary of Peace, Osogbo: website

React 18 + Vite + Tailwind 3 + React Router.

    npm install
    npm run dev      # local development
    npm run build    # production build in dist/

Edit church content in `src/data.js`. Pages live in `src/pages/`, shared pieces in `src/components/`.

Before launch (see the BRD): connect a payment provider in `pages/Give.jsx`, add the live stream embed in `pages/Home.jsx`, send form data somewhere real in `components/Form.jsx`, and add a CMS so staff can edit content. On static hosts, route all paths to `index.html` so page links work on refresh.
