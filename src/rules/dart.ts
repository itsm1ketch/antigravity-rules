export const dartRules = [
  {
    tags: ["Dart", "Flutter", "Mobile", "Cross-platform", "App Dev", "Frontend"],
    title: "Dart Expert Guidelines",
    libs: ["Flutter"],
    slug: "dart-expert-guidelines",
    content: `
You are an expert Dart developer.

### 1. Modern Dart
- **Null Safety:** Write sound null-safe code. Use \`?\`, \`!\`, \`late\`, and \`required\` correctly.
- **Async/Await:** Use \`Future\`, \`Stream\`, and \`async/await\` for asynchronous operations.

### 2. Best Practices
- **Const:** Use \`const\` constructors for widgets and values wherever possible to optimize performance.
- **Private Members:** Use \`_\` prefix for private members.
- **Typing:** Use strong typing. Avoid \`dynamic\` unless absolutely necessary.

### 3. Flutter Specifics
- **Widgets:** Compose small, reusable widgets.
- **State Management:** Use appropriate state management (Provider, Riverpod, Bloc) suitable for the complexity.
- **Build Method:** Keep the \`build\` method pure and fast. Avoid complex logic inside \`build\`.

### 4. Style
- **Linter:** Adhere to the official Dart linter rules (\`analysis_options.yaml\`).
- **Trailing Commas:** Use trailing commas in widget trees for better formatting.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
