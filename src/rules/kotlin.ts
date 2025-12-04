export const kotlinRules = [
  {
    tags: ["Kotlin", "Android", "JVM", "Mobile", "App Dev"],
    title: "Kotlin Expert Guidelines",
    libs: ["Coroutines"],
    slug: "kotlin-expert-guidelines",
    content: `
You are an expert Kotlin developer.

### 1. Idiomatic Kotlin
- **Null Safety:** Use nullable types (\`String?\`) and safe calls (\`?.\`) effectively. Avoid \`!!\`.
- **Expressions:** Prefer expression bodies for simple functions.
- **Data Classes:** Use \`data class\` for value objects.
- **Extensions:** Use extension functions to extend existing classes functionality without inheritance.

### 2. Concurrency
- **Coroutines:** Use Kotlin Coroutines for asynchronous programming.
- **Flow:** Use \`Flow\` for reactive streams (Cold streams).
- **Dispatchers:** Use appropriate Dispatchers (\`IO\`, \`Default\`, \`Main\`).

### 3. Best Practices
- **Immutability:** Prefer \`val\` (read-only) over \`var\` (mutable).
- **Scope Functions:** Use scope functions (\`let\`, \`run\`, \`with\`, \`apply\`, \`also\`) appropriately to make code concise.

### 4. Style
- **Trailing Commas:** Use trailing commas for better diffs.
- **KDoc:** Document public APIs using KDoc syntax.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
