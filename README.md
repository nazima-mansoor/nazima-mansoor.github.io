# Nazima Mansuri · Portfolio

Personal portfolio site for Nazima Mansuri, Senior Android Developer (EMM, MDM, Samsung Knox).
Built with plain HTML, CSS and JavaScript. No framework and no build step.

Live site: https://nazima-mansoor.github.io

## Project structure

```
index.html       Page layout (sections are empty; JavaScript fills them)
css/style.css    All styles, light and dark theme
js/data.js       ALL the content: profile, projects, apps, experience, skills
js/main.js       Reads data.js and builds the page
```

## How to change content

You only need to edit **`js/data.js`**.

### Add a featured project

Copy one block inside `featured: [ ... ]`, paste it below the last one, and change the text:

```js
{
  name: "My New App",
  category: "Device management",
  company: "Tabnova Solutions",
  icon: "shield",            // shield | phone | scan | school | pin | screen | lock | chat | car
  layout: "",                // "hero" = big card, "wide" = full width, "" = half width
  summary: "One sentence about what the app does.",
  highlights: [
    "First key feature.",
    "Second key feature."
  ],
  caseStudy: {
    problem:  "What problem did it solve?",
    solution: "What did you build or change?",
    result:   "What was the outcome?"
  },
  architecture: [            // optional, leave [] for no diagram
    { title: "Parent app", sub: "Sets rules", kind: "device" },   // kind: device | server | cloud | policy
    { title: "Backend",    sub: "Node.js",    kind: "server" }
  ],
  architectureNote: "",
  tags: ["Kotlin", "Knox"],
  playStore: ""              // Play Store link, or "" to hide
},
```

Every block ends with `},` (a comma). Missing commas are the most common mistake.

### Add a smaller app

Add a line inside the right company in `otherApps`:

```js
{ name: "App name", text: "What it does." },
```

### Other things

- Bold text: wrap words in `**double stars**`.
- Show your GitHub link: set `github: "https://github.com/your-username"` in `profile`.
- Numbers under the hero: edit `stats`.

## Run locally

Open `index.html` in a browser. Nothing to install.

## Deploy (GitHub Pages)

1. Upload all files and folders to the repository `nazima-mansoor.github.io`, keeping the folder structure.
2. Settings → Pages → Deploy from branch `main`, folder `/ (root)`.
3. Every change you commit goes live in about a minute.
