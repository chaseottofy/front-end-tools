# front-end-tools

Personal collection of front-end scripts I use to process specific front-end tasks. Will add to this when I come up with more ideas.

**third-party**
- [compress-svg](https://jakearchibald.github.io/svgomg/)
- [fonts](https://gwfh.mranftl.com/fonts)
- [icons-vercel](https://vercel.com/design/icons) *easier than material-icons...*
- [color-palette-generator](https://mycolor.space/?hex=%2309090B&sub=1)
- [read-me-github-badges](https://dev.to/envoy_/150-badges-for-github-pnk)
  
## mine
1. **invert-css**: Bulk invert css variable colors, I use this for converting my dark themes to light themes and vice versa.

2. **npm-install-helper**: Copy and paste a list of npm packages straight from a package.json file and this script will produce an npm install command.

3. **generate-html-head-w-json**: Generate <head> with JSON for easy templating

4. **[svg-to-script](https://chaseottofy.github.io/svg-to-script/)**
- **Requires a web interface to run, use the link above.**
- For those very specific cases where you need to dynamically create SVG elements in the DOM, but don't want to go through the trouble of writing dozens of `document.createElementNS` calls and naming each path, rect, circle, etc. 
- This script will generate the script for you, and can recreate any web-accessible SVG file.
- I use this whenever I make custom components that need SVGs and want to avoid innerHTML or any kind of request.

5. **[generate-unique-gradients](https://codepen.io/chaseottofy/pen/BaGqJKK)**
- **Requires a web interface to run, use the link above.**
- Generates very abstract and unique CSS gradients. They work really well as backdrops for pattern overlays, I use [transparenttextures.com](https://www.transparenttextures.com/).
- Copy to clipboard css
