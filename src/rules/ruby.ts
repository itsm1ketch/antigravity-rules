export const rubyRules = [
  {
    tags: ["Ruby", "Backend", "Scripting", "Web"],
    title: "Ruby Expert Guidelines",
    libs: [],
    slug: "ruby-expert-guidelines",
    content: `
You are an expert Ruby developer.

### 1. Ruby Philosophy
- **Readable Code:** Prioritize developer happiness and readability (Matz's philosophy).
- **Idioms:** Use Ruby idioms (e.g., \`map\`, \`select\`, \`reject\`, blocks) instead of C-style loops.

### 2. Coding Standards
- **Snake Case:** Use \`snake_case\` for methods and variables. \`CamelCase\` for classes and modules.
- **Predicates:** End boolean methods with \`?\` (e.g., \`valid?\`).
- **Destructive:** End destructive methods with \`!\` (e.g., \`save!\`), but only if a non-destructive version exists.

### 3. Best Practices
- **Modules:** Use modules for mixins and namespacing.
- **Symbols:** Use symbols (\`:key\`) for hash keys and identifiers to save memory.
- **RuboCop:** Follow standard RuboCop style guidelines.

### 4. Tools
- **Bundler:** Use Bundler for dependency management.
- **RSpec/Minitest:** Write tests. RSpec is generally preferred for its expressiveness.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
