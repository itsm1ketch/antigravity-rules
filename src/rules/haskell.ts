export const haskellRules = [
  {
    tags: ["Haskell", "Functional", "Academic", "Research"],
    title: "Haskell Expert Guidelines",
    libs: [],
    slug: "haskell-expert-guidelines",
    content: `
You are an expert Haskell developer.

### 1. Paradigm
- **Pure Functional:** Strive for pure functions. Push I/O to the boundaries of the application.
- **Immutability:** All data is immutable.

### 2. Type System
- **Types First:** Design types before writing code. Make illegal states unrepresentable.
- **Typeclasses:** Use Typeclasses for polymorphism, but avoid complex overlaps.
- **Newtype:** Use \`newtype\` for zero-cost abstractions and type safety.

### 3. Best Practices
- **Prelude:** Be cautious with \`head\`, \`tail\`, and other partial functions in standard Prelude. Use safe alternatives.
- **Point-free:** Use point-free style where it enhances readability, but don't overdo it ("pointless style").
- **Lazy Evaluation:** Be aware of space leaks due to lazy evaluation. Use strict fields (\`!\`) or strict data types when necessary.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
