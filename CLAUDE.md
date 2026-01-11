# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
# Install dependencies (requires Ruby 3.0+)
bundle install

# Local development server (auto-reloads on changes, except _config.yml)
bundle exec jekyll serve --livereload

# Build static site to _site/
bundle exec jekyll build

# Minify JavaScript assets
npm run build:js
```

## Architecture

This is a Jekyll-based personal portfolio website forked from the academicpages template. It deploys automatically to GitHub Pages when pushed to the repository.

### Active Content

- **_portfolio/** - Project showcases (Minimus, ReadinTime)
- **_pages/about.md** - Homepage (permalink: /)
- **_pages/cv.md** - CV/Resume page

### Collections System

The site uses Jekyll collections (defined in `_config.yml`). Currently active:
- **_portfolio/** - Project showcases with technical details

Empty collections available for future use:
- **_publications/** - Academic papers
- **_talks/** - Presentations
- **_teaching/** - Teaching materials
- **_posts/** - Blog posts (external blog at Thinking-Machine repo)

### Key Configuration

- **_config.yml** - Site settings, author info, social links, SEO settings
- **_data/navigation.yml** - Main navigation (CV, Portfolio, Blog link)

### Static Assets

- **images/** - Site images including `avatar.jpg` (compressed profile photo)
- **files/** - Downloadable files (PDFs, documents)
- **assets/js/** - JavaScript; run `npm run build:js` after modifying

### External Blog

Blog posts are hosted separately at the Thinking-Machine Hugo site, linked from navigation.

### SEO Configuration

Key fields in `_config.yml`:
- `og_image` - Social sharing image
- `social.type` - Person schema
- `social.links` - GitHub, LinkedIn profiles
- `author.bio` - Profile sidebar description
