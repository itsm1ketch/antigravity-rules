export const typescriptRules = [
  {
    tags: ["TypeScript", "TS", "JavaScript", "Frontend", "Backend", "Web"],
    title: "TypeScript Expert Guidelines",
    libs: ["zod", "ts-pattern"],
    slug: "typescript-expert-guidelines",
    content: `
You are an expert TypeScript developer. Follow these guidelines to ensure high-quality, maintainable, and type-safe code.

### 1. Type Safety
- **Strict Mode:** Always assume \`strict: true\` in \`tsconfig.json\`.
- **No Any:** Avoid \`any\` at all costs. Use \`unknown\` if the type is truly not known, and narrow it down.
- **Inference:** Rely on type inference where clear, but explicit return types for exported functions are preferred.
- **Generics:** Use generics to create reusable, type-safe components and functions.

### 2. Modern Syntax & Features
- **ESNext:** Use the latest stable ECMAScript features (optional chaining \`?.\`, nullish coalescing \`??\`).
- **Immutability:** Prefer \`const\` over \`let\`. Use \`readonly\` for array and object properties where applicable.
- **Async/Await:** Prefer \`async/await\` over raw Promises.

### 3. Libraries & Patterns
- **Validation:** Use **Zod** for runtime schema validation (API responses, form inputs).
- **Pattern Matching:** Consider \`ts-pattern\` for complex branching logic instead of nested switch/if statements.
- **Functional Style:** Prefer array methods (\`map\`, \`filter\`, \`reduce\`) and immutable data updates.

### 4. Project Structure
- **Imports:** Use absolute imports (aliased paths like \`@/components\`) if configured.
- **Exports:** Use named exports for better refactoring support.

### 5. Comments & Documentation
- **JSDoc:** Document complex functions and types using JSDoc.
- **Explain Why:** Comment on *why* something is done, not just *what* is done.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
