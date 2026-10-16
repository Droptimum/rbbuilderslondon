# RB Builders London

Marketing site built with Nuxt 4 + Tailwind CSS 4, statically generated for Netlify.

## Develop

```bash
nvm use        # Node 22 (see .nvmrc)
npm install
npm run dev    # http://localhost:3000
```

## Deploy (Netlify)

`netlify.toml` already sets the build command (`npm run generate`) and publish folder (`.output/public`).
Connect the repo in Netlify, or drag `.output/public` into the Netlify dashboard after `npm run generate`.

## Editing content

- Business details (phone, email, area): `app/data/site.ts`
- Services: `app/data/services.ts`
- Project photos: `public/images/projects/` + `app/data/projects.ts`
- Client reviews: `app/data/testimonials.ts` (currently placeholders — replace before launch)

## Contact form

Uses Netlify Forms. Submissions appear under **Forms → quote** in the Netlify dashboard;
turn on email notifications there. The form definition lives in `public/__forms.html` —
keep its field names in sync with `app/components/ContactForm.vue`. The form only works on Netlify, not on `npm run dev`.
