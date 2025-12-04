export const cssRules = [
  {
    tags: ["CSS", "Styling", "Frontend", "Web", "Design", "Responsive"],
    title: "CSS Expert Guidelines",
    libs: [],
    slug: "css-expert-guidelines",
    content: `
You are an expert CSS developer.

### 1. Architecture
- **Modern CSS:** Use CSS Variables (Custom Properties) for theming (\`--primary-color\`).
- **Flexbox/Grid:** Use Flexbox for 1D layouts and CSS Grid for 2D layouts. Avoid floats for layout.
- **BEM:** If writing raw CSS/SCSS, consider BEM (Block Element Modifier) naming convention for modularity.

### 2. Best Practices
- **Reset/Normalize:** Assume a modern reset or normalize.css is present.
- **Units:** Use relative units (\`rem\`, \`em\`) for sizing and spacing. Use \`px\` sparingly (e.g., thin borders).
- **Specificity:** Avoid \`!important\`. Manage specificity by keeping selectors shallow.

### 3. Responsive Design
- **Mobile First:** Write mobile styles by default and use \`min-width\` media queries for larger screens.
- **Images:** Ensure images are responsive (\`max-width: 100%; height: auto;\`).
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
