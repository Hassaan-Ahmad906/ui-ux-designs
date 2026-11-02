# StudyNest — PUCIT HCI Lab 07

Responsive student productivity landing page created from an editable Figma design using semantic HTML5, CSS, and JavaScript.

## Figma source
https://www.figma.com/design/5sondMvS5PCUdVyivqud60

## Sections
- Navigation bar with responsive mobile menu
- Hero with CTA and sample study dashboard
- Three feature cards
- How-it-works information
- Contact form with client-side validation (demo only: no server submission)
- Footer

## How to run
Open `index.html` in a browser, or use the VS Code Live Server extension.

## MCP setup (VS Code)
The `.vscode/mcp.json` file configures the remote Figma MCP server. Open the project in a compatible VS Code version and follow the Figma authentication prompt in the MCP server picker. To inspect the Figma frame, copy the frame-specific selection link in Figma and ask your agent to use the Figma design context and variables tools.

## Responsiveness and accessibility
- Test widths: 1440px, 768px and 375px using browser DevTools.
- CSS grid/flexbox and responsive breakpoints.
- Semantic landmarks and headings; keyboard focus styles; associated form labels; accessible menu button; reduced motion setting.
- Dashboard is HTML/CSS, not a flattened screenshot.
- Form is only a demo; it does NOT send or store messages.

## Deployment
1. Create a public GitHub repository named `studynest-hci-lab07`.
2. Push all files, including `.vscode/mcp.json`.
3. In Vercel, import the GitHub repository as an Other/static web project. The root is the project folder; no build command is needed.
4. Verify the deployed URL on desktop, tablet, and mobile.

## Submission links
- Figma: https://www.figma.com/design/5sondMvS5PCUdVyivqud60
- GitHub: add after publishing
- Live Site: add after deploying
