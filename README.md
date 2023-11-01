# front-end-tools

Personal collection of front-end scripts I use to process specific front-end tasks. Will add to this when I come up with more ideas.

## current tools
1. invert-css
- bulk invert css variable colors
- I use this for converting my dark themes to light themes and vice versa.

2. npm-install-helper
- copy and paste a list of npm packages straight from a package.json file and this script will produce an npm install command.

3.[SVG-TO-SCRIPT](https://chaseottofy.github.io/svg-to-script/)
- **Requires a web interface to run, use the link above.**
- For those very specific cases where you need to dynamically create SVG elements in the DOM, but don't want to go through the trouble of writing dozens of `document.createElementNS` calls and naming each path, rect, circle, etc. 
- This script will generate the script for you, and can recreate any web-accessible SVG file.
- I use this whenever I make custom components that need SVGs and want to avoid innerHTML or any kind of request.
