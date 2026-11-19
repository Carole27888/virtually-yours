# Agency Website

A multi-page website for a full-service virtual assistant and digital services agency.
Built with React, Vite, Tailwind CSS and React Router. Ready to deploy on Vercel.

All the words, services, prices and team members live in plain data files in
`src/data/`, so you can update content without touching any page code.

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) version 20 or newer.

```bash
npm install      # first time only
npm run dev      # start the site at http://localhost:5173
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the live site into the `dist/` folder |
| `npm run preview` | Serves the built site at http://localhost:4173 to check it |

---

## 2. Edit the content

Every file in `src/data/` is commented. Open it, change the text between the quotes, and
save. The dev server updates the page straight away.

| File | What it controls |
| --- | --- |
| `site.js` | **Agency name**, email, location, social links, Calendly link, form endpoints, menus, main call to action |
| `seo.js` | Page titles and Google descriptions for each fixed page |
| `home.js` | Home page hero, pain points, final call to action |
| `services.js` | The 7 services. Each one creates a page at `/services/<slug>` |
| `industries.js` | The industry sections on `/industries` |
| `process.js` | The 5 "How it works" steps and the "Your first 30 days" timeline |
| `pricing.js` | Plans, custom team, add-ons, pricing FAQ and the time-back calculator text |
| `security.js` | The "Your data is safe with us" section (home page and How It Works) |
| `testimonials.js` | Client testimonials (placeholders for now) |
| `team.js` | Founder bio and photo, plus team member cards |
| `about.js` | Story, mission and values |
| `careers.js` | Roles, requirements, benefits and application form options |
| `contact.js` | Contact page text and budget ranges |
| `blog.js` | Blog posts (2 samples). Each one creates a page at `/blog/<slug>` |
| `legal.js` | Privacy Policy and Terms of Service |

### Placeholders

Anything in `[SQUARE BRACKETS]` is a placeholder, for example `[EMAIL]`, `[PRICE]` or
`[CALENDLY LINK]`. The site highlights placeholders in yellow, and placeholder links are
not clickable until you replace them. Search the project for `[` to find them all.

Placeholder testimonials and team members have `isPlaceholder: true` and show a
"Placeholder" label. Before launch, either replace them with real ones (and set
`isPlaceholder: false`), or set `showPlaceholders: false` in `site.js` to hide any that are
left. A section with nothing left to show disappears completely.

### Common tasks

- **Add a team member:** copy one of the objects in the `team` list in `team.js`. Put
  photos in `public/images/` and set `photo: "/images/their-photo.jpg"`. Use `photo: null`
  to show their initials instead.
- **Add your founder photo:** save a square photo (at least 800 x 800) as
  `public/images/founder.jpg` and set `photo: "/images/founder.jpg"` in `team.js`.
- **Add a blog post:** copy a post in `blog.js`, give it a new `slug`, and write the body
  using the block types listed at the top of the file. Remove `isSample: true`.
- **Use a different icon:** pick one at [lucide.dev/icons](https://lucide.dev/icons), add it
  to `src/lib/icons.jsx` (import it and add it to `registry`), then use its name in a data file.

### Writing rule

Keep copy free of em dashes. Use a full stop, comma or colon instead.

---

## 3. Change the agency name

Open `src/data/site.js` and change one line:

```js
export const AGENCY_NAME = "Virtually Handled Co.";
```

The page titles, link previews, footer, About, Careers and legal pages all update.

**Logo:** the site uses one file, `public/logo.png`, exactly as supplied (it is never
recoloured). It appears in the header and footer and is the browser tab icon. To change the
logo, replace that file with a new one of the same name. If your logo is a symbol without
the agency name in it, set `logo.showName: true` in `src/data/site.js` and the name is
printed beside it.

Also update:
- `name` in `package.json` (optional, not shown anywhere)
- `public/og-image.png`, the image shown when someone shares a link (see section 7)

---

## 4. Change the colours and fonts

All colours are defined once, in `src/index.css`, inside the `@theme { ... }` block:

| Token | Current colour | Used for |
| --- | --- | --- |
| `primary-50` to `primary-950` | Deep forest green, `#1F3D2B` is `primary-900` | Dark sections, footer, dark buttons, icon badges, tints |
| `accent-50` to `accent-900` | Clay / terracotta, `#C2603E` is `accent-500` | Main buttons, small labels, key numbers (used sparingly) |
| `ink-50` to `ink-950` | Warm neutrals, `#1A1A1A` is `ink-950` | Headings, body text, borders and lines |
| `paper`, `paper-200` | Warm off-white `#F7F3EC` and a slightly deeper tone | Page background and alternating sections |

To change the palette, replace those hex values and keep the same shade numbers. Tools
like [uicolors.app](https://uicolors.app) generate a full scale from a single colour.
Lower numbers are lighter, higher numbers are darker.

The design is intentionally flat: no gradients, glows or shadows. Cards are white on the
off-white page with thin borders.

Also update `theme-color` in `index.html` (the browser bar colour on phones) and
`primary_color` in `src/components/CalendlyEmbed.jsx`.

**Fonts** are self-hosted (no Google Fonts requests). To change them, install another
[Fontsource](https://fontsource.org) font, for example `npm install @fontsource-variable/manrope`,
then update the `@import` lines and `--font-sans` / `--font-display` in `src/index.css`.

---

## 5. Connect the forms

The contact form and careers application form use [Formspree](https://formspree.io), so you
don't need your own server.

1. Create a free Formspree account.
2. Create two forms: one for "Contact" and one for "Careers".
3. Copy each form's endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
4. Paste them into `src/data/site.js`:

   ```js
   forms: {
     contact: "https://formspree.io/f/abcdwxyz",
     careers: "https://formspree.io/f/efghwxyz",
   },
   ```

5. Submit each form once on your live site and confirm the email in Formspree.

Visitors see a success message after sending, or a clear error message if something goes
wrong. Until the endpoints are set, the forms show a "not connected yet" message.

**CV uploads:** Formspree accepts file uploads on paid plans only, so `forms.allowFileUploads`
in `src/data/site.js` is `false`. Applicants paste a link to their CV (Google Drive,
Dropbox) instead. If you upgrade Formspree, set it to `true` and the "Upload your CV" field
comes back, with the link as an alternative.

Spam protection: both forms include a hidden honeypot field. You can turn on reCAPTCHA in
your Formspree settings too.

**Calendly:** set `calendlyUrl` in `site.js` to your scheduling link, for example
`https://calendly.com/your-name/discovery-call`. It appears on the Contact page, and every
"Book a free discovery call" button links there.

---

## 6. Deploy to Vercel

1. Put the project on GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   ```
   Then create an empty repository on GitHub and follow its instructions to push.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub and click **Add New Project**.
3. Import the repository. Vercel detects Vite automatically:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.
5. Add your domain under **Settings > Domains**.
6. **Important:** set `url` in `src/data/site.js` to your live domain (for example
   `https://www.youragency.com`) and push the change. The sitemap, canonical URLs and link
   previews all use it.

Every push to GitHub redeploys the site automatically.

---

## 7. SEO and link previews

- Each page has its own title, meta description, canonical URL and Open Graph / Twitter tags.
- When you build, `scripts/postbuild.mjs` writes a separate HTML file for every page with
  those tags already in it. That means LinkedIn, WhatsApp, Facebook and Slack show the right
  title and description for each link, even though they don't run JavaScript.
- `sitemap.xml` and `robots.txt` are generated on every build from the data files, so new
  services and blog posts are added automatically. After launch, submit
  `https://virtuallyhandledco.com/sitemap.xml` in
  [Google Search Console](https://search.google.com/search-console).
- The default share image is `public/og-image.png` (1200 x 630). It currently shows the
  agency name as text. Replace it with a version that includes your logo if you like.

---

## Project structure

```
├── index.html               HTML shell (default meta tags between the seo markers)
├── vercel.json              clean URLs + send unknown routes to the app
├── scripts/postbuild.mjs    per-page meta tags, sitemap.xml, robots.txt
├── public/                  favicon, share image, images
└── src/
    ├── data/                ALL CONTENT (edit these)
    ├── index.css            colour and font tokens, shared styles
    ├── lib/                 SEO helpers, icon registry, date formatting
    ├── components/
    │   ├── layout/          header, footer, page layout
    │   ├── ui/              buttons, sections, accordion, placeholders, logo
    │   ├── sections/        cards, process steps, testimonials, CTA banner
    │   ├── forms/           contact and careers forms
    │   ├── CalendlyEmbed.jsx
    │   └── Seo.jsx
    └── pages/               one file per page
```

## Before going live

These are still placeholders. Search the project for `[` to find them.

**Pending items you named**

- [ ] **Social media links:** Instagram, Facebook, LinkedIn, TikTok and X under `socials` in
      `src/data/site.js`. Until each is set, its footer icon shows dimmed and is not clickable.

**Also still to decide**

- [ ] **Legal review:** the Privacy Policy and Terms (`src/data/legal.js`) are filled in.
      Have a lawyer review them before launch.

**Hidden until you add real content**

`showPlaceholders` is `false` in `src/data/site.js`, so placeholder testimonials and team
members do not appear anywhere. The testimonials section on the home page and the team
section on the About page are hidden entirely. To show them, replace the entries in
`testimonials.js` / `team.js` with real ones and set `isPlaceholder: false` on each.
