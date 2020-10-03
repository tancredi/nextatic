<img src="content/img/logo.svg" alt="alt text" width="whatever" height="whatever" alt='Nextatic logo'>

> A static static website starter with internationalisation using Netlify CMS, Next.js, SCSS + Typescript Starter

### Stack

- [Netlify CMS](https://www.netlifycms.org/)
- [Next.js](https://nextjs.org/)
- [SCSS/SASS](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)

### Features

- Builds to a fully static website deployable to Netlify
- Built for internalisation using i18n Netlify CMS features
- CMS driven routes and navigation
- A good starter layout with all the essentials
- Provides basic utilities to easily extend and put in use CMS entries

### Quick start

Run the dev server

```
npm run dev
# The dev server runs on http://localhost:3000 by default
```

Built the static website

```
npm run export
# The static website will be built in the `dist` folder
```

### What is it good for?

This is a good setup if you're looking to tackle building a static website with some CMS requirements in at least than one language, as most of the complexity is involved in the routing and merging of content from the CMS.

Otherwise, there would be a lot of stripping down to do, and I would recommend starting from scratch.

The main restriction is the assumption that most of the website will live under the `/[locale]/[page-slug]` route, for example `/en/my-page`.

### How does it work?

As you can see from the Next.js routes in `src/pages`, most of the work is done by a single route, `[locale]/[slug].tsx`, which will load the localised content of a page entry from the CMS and render the `src/page-components/DefaultPage.tsx` component with it or any other component mapped to that slug in `src/page-components/index.ts`

### Models

Modules exporting CMS entry types and sync getters can be found under `src/models`. They can be used as templates for new CMS entries, as long as the model matches definitions in the CMS configuration, found in `public/admin/config.yml`

### Netlify config

Use the following configuration to deploy correctly on netlify:

**Build command:** `npm run export`

**Publish directory:** `dist`
