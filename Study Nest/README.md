# StudyNest — PUCIT HCI Lab 07

Responsive student productivity landing page built with semantic HTML5, CSS, and vanilla JavaScript. All design sections have adjustable grids or flex layouts; no absolute positioning is used for the page structure. Includes SVG icons, an accessible mobile menu, demo contact form validation and a Figma MCP setup file.

## Run locally

1. Open this project folder in VS Code.
2. Open `index.html` with Live Server (or open the HTML file directly in a browser).
3. Test using Chrome DevTools at 1440px, 768px and 375px.

No Node.js build is required. All code and assets are local.

## Figma designs

- Full Figma file: https://www.figma.com/design/5sondMvS5PCUdVyivqud60
- Desktop: https://www.figma.com/design/5sondMvS5PCUdVyivqud60/StudyNest?node-id=2-2
- Tablet: https://www.figma.com/design/5sondMvS5PCUdVyivqud60/StudyNest?node-id=2-91
- Mobile: https://www.figma.com/design/5sondMvS5PCUdVyivqud60/StudyNest?node-id=2-180

For the remaining manual Figma vector import and final visual checks, see **FIGMA-FINAL-CHECK.md**. The Figma MCP editing quota was exceeded; the `.svg` assets are prepared locally but **not yet inserted in the Figma file**.

## Directory structure

```text
studynest-lab07/
├── index.html
├── styles.css
├── script.js
├── assets/icons/
│   ├── sparkle.svg
│   ├── check-circle.svg
│   ├── trending-up.svg
│   ├── clock.svg
│   ├── menu.svg
│   └── close.svg
├── .vscode/mcp.json
├── FIGMA-FINAL-CHECK.md
├── README.md
└── .gitignore
```

## Lab task mapping

| Task | Implementation |
| ---- | -------------- |
| 1. Prepare design | Figma Auto Layout, semantic layers and 19 color/spacing variables; SVG assets supplied for Figma import |
| 2. MCP or plugin | Remote Figma MCP configuration in `.vscode/mcp.json`; actual MCP extraction still blocked by plan quota |
| 3. Responsiveness & accessibility | CSS grid/flex, media queries, 1440/768/375 viewports, semantic landmarks, navigation button, visible focus ring, associated form labels, decorative icon `alt=""`, responsive text |
| 4. Publish | GitHub public repository and live Vercel/Netlify/GitHub Pages URL **still need to be created** |

## Notes

- This is a static demo site, not an authenticated study planner.
- The contact form validates inputs in the browser only. It does **not** send or save messages.
- Decorative images use `alt=""`; meaningful dashboard content has descriptive accessible labels.
- The website also includes a short **How it works** section to give the navbar link a useful destination. That optional section was not in the original Figma frames.

## VS Code MCP configuration

The existing `.vscode/mcp.json` contains the Figma remote endpoint (`https://mcp.figma.com/mcp`) using VS Code's `servers` schema. Connect it from VS Code Agent mode. Figma plan quota may block tool calls; connectivity and a successful design extraction are separate steps.

## Deploy using Vercel

1. Create a public GitHub repository (e.g. `PUCIT-HCI-Labs`) and copy these files to `Lab-07-Figma-to-Website/`.
2. Commit and push. Ensure the `.vscode` folder and `assets` folder are included.
3. Import the GitHub repo into Vercel, select **Other** and set **Root Directory** to `Lab-07-Figma-to-Website`.
4. Build command: none. Output: directory containing `index.html` (leave framework defaults if possible).
5. Verify your deployed site and fill in the URLs below.

## Submission links

- Figma: https://www.figma.com/design/5sondMvS5PCUdVyivqud60
- GitHub repository/folder: **add after publishing**
- Live website: **add after deployment**
