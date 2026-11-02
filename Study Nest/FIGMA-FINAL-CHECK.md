# Figma final check — PUCIT HCI Lab 07

Figma file: https://www.figma.com/design/5sondMvS5PCUdVyivqud60

## Frames
- Desktop (1440px): `node-id=2-2`
- Tablet (768px): `node-id=2-91`
- Mobile (375px): `node-id=2-180`

The earlier Figma edit fixed the core overflowing content by using **Hug Contents** for section heights, constrained widths and wrapping for text, and vertical stacking for tablet/mobile. The final visual screenshot could not be confirmed, because Figma's Starter-plan MCP API reached its quota. Do not claim that the Figma icon work or visual validation was completed remotely.

## Import the supplied vector icons into Figma

1. Download/unzip this project and open the existing Figma design.
2. Open `assets/icons` on your computer. The `.svg` files are editable vector assets.
3. Drag `sparkle.svg`, `check-circle.svg`, `trending-up.svg`, `clock.svg`, and (optionally) `menu.svg` into Figma.
4. In each frame, select the current text-icon node inside the FeatureIcon/Brand group. Replace it with the appropriate imported SVG vector, maintaining the existing Auto Layout parent. You can move the SVG inside the badge frame in the Layers panel.
5. Give vector layers semantic names such as `Icon/CheckCircle`, `Icon/TrendingUp`, `Icon/Clock`, `Icon/Sparkle`.
6. Select each SVG vector and enable export in the right sidebar: `+` under Export → SVG.
7. Confirm each frame includes Navbar, HeroSection, FeaturesSection, ContactSection, Footer and that layers use Auto Layout.
8. Confirm all headings and card descriptions wrap inside their parent, and that there is no horizontal clipping at 1440, 768 or 375.
9. Share the Figma file link with view permission (Settings > Share as appropriate).

## Suggested screenshots for your lab report

- Desktop frame with the layers panel open (semantic layer names)
- Auto Layout sidebar showing `Hug contents` / `Fill container`
- Local variables panel with `StudyNest / Design Tokens`
- Desktop/tablet/mobile comparisons
- Successful MCP inspection or accepted plugin-based conversion, **not just an MCP quota error**

## Difference between website and Figma

The website includes a short `How it works` section to make the navbar link function properly. The Figma frames focus on the four required regions and do not contain that extra section. To match them exactly, either add the section in Figma or remove it and change the website navigation link.
