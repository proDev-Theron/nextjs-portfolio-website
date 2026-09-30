# nextjs-portfolio-website

Personal portfolio of Theron Bueno. Next.js (pages router) with plain CSS, built as a static site. The previous design is tagged `v1.0`.

## Requirements

- Node.js 20.9 or newer

## Scripts

```
npm install
npm run dev     # local dev server at http://localhost:3000
npm run build   # static export to ./out
npm start       # serve ./out locally
```

## Editing content

- All page copy (results, cases, experience, tools, certifications): `src/data/content.js`
- Layout: `src/pages/index.js`
- Colors, type, and spacing: `src/styles/site.css`
- Images and PDFs: `public/`
