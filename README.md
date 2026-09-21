# Neil Mathew’s blog

A small static Astro site. Markdown posts, plain CSS, locally served Inter fonts, and tiny browser scripts for theme switching and back-to-top. No React, CMS, database, or server adapter.

## Run it

Requires Node 22.12 or newer.

```sh
npm install
npm run dev
```

Open the localhost URL Astro prints. `npm run check` checks types; `npm run build` creates the static site in `dist/`; `npm run preview` serves that build.

## Where things live

- `src/site.config.ts`: name, intro, description, domain, and social links. Intro is starter copy—replace it with your own.
- `src/content/posts/`: Markdown posts. The sample article can be edited or removed.
- `src/content.config.ts`: required fields for every post.
- `src/pages/index.astro`: homepage and all published posts.
- `src/pages/posts/[...slug].astro`: the shared article template.
- `src/layouts/Base.astro`: document metadata, header, and footer.
- `src/styles/global.css`: all visual styling.
- `src/components/`: theme toggle and back-to-top button.
- `src/utils/social-image.ts`: generated social-card design.
- `public/`: favicon and any post images you add (for example `public/images/photo.jpg`).

## Write a post

Create `src/content/posts/my-post.md`:

```md
---
title: "My first post"
description: "A short summary for the homepage and link previews."
publishDate: 2026-09-20
draft: true
---

Your writing here.
```

The filename becomes `/posts/my-post/`. Use Markdown headings, lists, links, images, and fenced code blocks. Add an image with `![Meaningful description](/images/photo.jpg)`. Optional frontmatter cover:

```yaml
cover:
  src: /images/photo.jpg
  alt: A description of the photo
```

Set `draft: false` and rebuild to publish. Drafts never get public HTML or social cards, even in development. Draft source files are NOT private in a public GitHub repository. Dates are labels, not a scheduler; future-dated posts publish if draft is false.

## Social links

Add real profiles to `socials` in `src/site.config.ts`, for example `{ label: 'GitHub', url: 'https://github.com/YOUR_USERNAME' }`. The footer shows only configured links. No accounts are assumed.

## What runs where

Astro reads Markdown and creates HTML, a sitemap, and 1200 × 630 social PNGs at build time. The browser only runs the two small interaction scripts. Light is the initial theme; the toggle saves the visitor’s choice on that device. Inter is bundled locally, without a font-service request.

## Deployment later

The source is ready for GitHub but no repository or remote hosting is configured yet. Connect your repository to a static host with build command `npm run build` and output directory `dist`. Check `site.url` before deploying. Social platforms need the images to be publicly reachable on that domain.

## Future experiments

For a custom interactive story, add an `.astro` page and reuse `Base.astro`. Add MDX or React only when a post needs it. Standalone pages need an entry in the homepage listing if you want them listed with posts; that integration is intentionally deferred. Search, archive pagination, RSS, CMS, Apple Notes publishing, and other extras are not part of this first version.
