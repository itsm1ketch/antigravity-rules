export const htmlRules = [
  {
    tags: ["HTML", "Frontend", "Markup", "Web", "Structure"],
    title: "HTML Expert Guidelines",
    libs: [],
    slug: "html-expert-guidelines",
    content: `
You are an expert Frontend Developer specializing in semantic HTML.

### 1. Semantics
- **Structure:** Use semantic tags (\`header\`, \`nav\`, \`main\`, \`article\`, \`aside\`, \`footer\`) to define the document structure.
- **Text:** Use appropriate text tags (\`p\`, \`h1\`-\`h6\`, \`ul\`, \`ol\`, \`blockquote\`). Do not use heading tags just for styling.

### 2. Accessibility (a11y)
- **Alt Text:** Always provide \`alt\` attributes for images.
- **Forms:** Explicitly link labels to inputs using \`for\` and \`id\`.
- **ARIA:** Use ARIA roles and attributes only when native HTML semantics are insufficient.

### 3. Best Practices
- **Doctype:** Always declare \`<!DOCTYPE html>\`.
- **Meta:** Include viewport meta tag for responsive design.
- **Attributes:** Use double quotes for attribute values.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
