# FitPath — Personal Workout & Diet Guider

A fully static website you can host on **GitHub Pages** for free.

## Features
- 7-question personality quiz (body type, goal, experience, equipment, diet, budget)
- Personalised 7-day workout schedule with exercise form instructions
- Full daily diet plan with meal timings and macros
- Monthly grocery budget breakdown (₹1,500–₹6,500/month)
- Beginner-friendly: every exercise has clear how-to instructions
- Print / Save as PDF button
- 100% offline — no server, no sign-up needed

## How to Upload to GitHub Pages

1. Create a free account at https://github.com
2. Click **New Repository** → name it `fitpath` (or anything you like)
3. Upload ALL files from this zip — keep the folder structure:
   ```
   index.html
   css/style.css
   js/data.js
   js/app.js
   README.md
   ```
4. Go to **Settings → Pages**
5. Under "Source" select **main branch** and **/ (root)**
6. Click **Save** — your site will be live at:
   `https://YOUR_USERNAME.github.io/fitpath/`

That's it! Share the link with anyone.

## Customise
- Edit `js/data.js` to add more exercises or meals
- Edit `css/style.css` to change colours
- Prices in budget are in Indian Rupees (₹) — update as needed

## Tech Stack
Pure HTML, CSS, and vanilla JavaScript. No frameworks, no dependencies, no build step needed.
