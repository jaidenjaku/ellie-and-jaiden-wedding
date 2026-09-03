# Ellie & Jaiden's Wedding Site

Live at **[ellieandjaiden.com](https://ellieandjaiden.com)**.

An interactive save-the-date invite: click the envelope to open it, watch the
save-the-date card and photos reveal, scroll through more photos, and submit
your mailing address for the formal invite.

This was my first project built working with an AI coding agent (Claude Code)
rather than writing all the code myself.

## Project structure

Plain HTML/CSS/JS — no build step, no frameworks, no dependencies to install.

- `index.html` — page content and structure
- `style.css` — all colors, layout, fonts, and animations
- `script.js` — the envelope-open interaction, RSVP form submission, and footer reset link
- `images/photos/` — the couple's photos used throughout the site
- `PLAN.md` — the milestone-by-milestone build plan and current status

## Editing

Open `index.html`, `style.css`, or `script.js` in any text editor. Lines
marked `✏️ EDIT ME` are the ones meant to be personalized (text, dates,
photo file names, colors). No installation or build step needed — just
open `index.html` directly in a browser to preview changes.

## RSVP form

The mailing-address form submits to [Web3Forms](https://web3forms.com)
(free tier), which emails each submission and lets you export responses
as a CSV from their dashboard. The access key lives in `index.html` as a
hidden form field.

## Hosting

Hosted for free on **GitHub Pages**, served from the `main` branch, with
`ellieandjaiden.com` (purchased through Namecheap) pointed at it via DNS.
The `CNAME` file in this repo tells GitHub Pages which custom domain to
serve.
