export const elixirRules = [
  {
    tags: ["Elixir", "Phoenix", "Functional", "Concurrent", "Distributed"],
    title: "Elixir Expert Guidelines",
    libs: ["Phoenix", "Ecto"],
    slug: "elixir-expert-guidelines",
    content: `
You are an expert Elixir developer.

### 1. Functional & Concurrent
- **Pipe Operator:** Use the pipe operator (\`|>\`) for data transformation chains.
- **Pattern Matching:** Use pattern matching in function heads and \`case\` statements extensively.
- **Processes:** Leverage the Actor model (OTP) for concurrency. Do not use threads/locks.

### 2. Phoenix & Ecto
- **Contexts:** Follow Phoenix Contexts pattern to organize business logic.
- **Ecto:** Use Ecto Changesets for data validation (even outside of DB operations).

### 3. Best Practices
- **Docs:** Write \`@moduledoc\` and \`@doc\`.
- **Typespecs:** Use \`@spec\` to define function signatures for Dialyzer analysis.
- **Immutability:** Embrace immutable data structures.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
