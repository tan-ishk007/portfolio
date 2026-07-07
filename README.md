# Tanishk Gupta — Portfolio

My personal portfolio website — a fully responsive, animated single-page site built with plain HTML, CSS, and JavaScript, powered by GSAP and ScrollTrigger for scroll-based motion.

**Live site:** https://tan-ishk007.github.io/portfolio/

> This is the current, animated version of my portfolio. The original, simpler HTML/CSS-only version is still live at [v1-portfolio](https://tan-ishk007.github.io/v1-portfolio/).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)

## Overview

This site brings together my academic background, projects, technical skills, and coding profiles into one clean, interactive interface. It's built from scratch — no frameworks, no page builders — with a focus on smooth scroll-triggered animations and a layout that adapts cleanly from desktop down to mobile.

## Features

- **Scroll-triggered animations** for every section, powered by GSAP's ScrollTrigger plugin
- **Magnetic buttons** that subtly follow the cursor on hover
- **Animated hero timeline** with staggered entrance effects on page load
- **Sticky nav bar** that hides on scroll-down and reappears on scroll-up, with an active-link indicator synced to scroll position
- **Fully responsive** layout across desktop, tablet, and mobile breakpoints
- **Resilient by design** — defensive fallbacks ensure all content stays visible even if the animation library fails to load or a trigger doesn't fire as expected

## Sections

| Section | Description |
|---|---|
| Hero | Introduction, availability status, and quick links |
| About | Background, current focus areas, and academic stats |
| Projects | Selected work with tech stack and live/source links |
| Skills | Languages, web development, tools, and CS fundamentals |
| Achievements | Academic, competitive programming, and extracurricular highlights |
| Contact | Direct links to email, GitHub, and LinkedIn |

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, Grid, Flexbox, backdrop-filter glassmorphism
- **JavaScript (Vanilla)** — DOM interactions, scroll logic
- **[GSAP](https://gsap.com/) + ScrollTrigger** — animation engine
- **GitHub Pages** — hosting/deployment

## Project Structure

```
├── index.html          # Markup and page structure
├── style.css           # All styling, layout, and responsive rules
├── script.js            # GSAP animations, scroll logic, interactions
└── assets/
    ├── images/          # Profile photo and other images
    └── files/           # Resume PDF
```

## Running Locally

No build step required — it's static HTML/CSS/JS.

```bash
git clone https://github.com/tan-ishk007/portfolio.git
cd portfolio
```

Then open `index.html` directly in a browser, or serve it locally for the best experience (some browsers restrict certain features over `file://`):

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve
```

Visit `http://localhost:8000`.

## Deployment

Deployed via **GitHub Pages** directly from the `main` branch. Any push to `main` updates the live site automatically.

## Contact

- **Email:** [guptatanishk007@gmail.com](mailto:guptatanishk007@gmail.com)
- **GitHub:** [@tan-ishk007](https://github.com/tan-ishk007)
- **LinkedIn:** [tanishk-gupta](https://linkedin.com/in/tanishk-gupta-168506375)
- **LeetCode:** [tan_ishk_007](https://leetcode.com/u/tan_ishk_007/)
- **Codeforces:** [tan__ishk__007](https://codeforces.com/profile/tan__ishk__007)
