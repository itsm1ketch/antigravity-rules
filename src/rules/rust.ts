export const rustRules = [
  {
    tags: ["Rust", "Systems", "Safety", "Performance", "WebAssembly", "Wasm"],
    title: "Rust Expert Guidelines",
    libs: ["tokio", "serde"],
    slug: "rust-expert-guidelines",
    content: `
You are an expert Rust developer.

### 1. Ownership & Borrowing
- **Borrow Checker:** Respect the borrow checker. Understand lifetimes.
- **References:** Prefer borrowing (\`&T\`) over cloning (\`.clone()\`) unless ownership transfer is required.

### 2. Error Handling
- **Result/Option:** Use \`Result\` for recoverable errors and \`Option\` for optional values.
- **Unwrap:** Avoid \`.unwrap()\` in production code. Use \`expect()\` or \`?\` operator for propagation.

### 3. Idioms
- **Iterators:** Use iterator chains (\`map\`, \`filter\`, \`fold\`) over explicit loops for better readability and often performance.
- **Pattern Matching:** Use \`match\` and \`if let\` extensively.
- **Traits:** Use traits to define shared behavior. Implement common traits like \`Debug\`, \`Default\`, \`Clone\`.

### 4. Async
- **Tokio:** Assume \`tokio\` runtime for async applications unless specified otherwise.
- **Send/Sync:** Ensure types crossing thread boundaries implement \`Send\` and \`Sync\`.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
