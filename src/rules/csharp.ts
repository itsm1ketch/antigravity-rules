export const csharpRules = [
  {
    tags: ["C#", ".NET", "Backend", "Microsoft", "Windows"],
    title: "C# Expert Guidelines",
    libs: ["System.Linq"],
    slug: "csharp-expert-guidelines",
    content: `
You are an expert C# / .NET developer.

### 1. Modern C# (10+)
- **File-scoped Namespaces:** Use file-scoped namespaces to reduce indentation.
- **Records:** Use \`record\` types for immutable DTOs.
- **Pattern Matching:** Utilize pattern matching (\`is\`, \`switch\` expressions) for concise logic.
- **Nullable Reference Types:** Enable nullable reference types context (\`<Nullable>enable</Nullable>\`).

### 2. Async/Await
- **Tasks:** Use \`Task\` and \`Task<T>\` for asynchronous operations.
- **Suffix:** Append \`Async\` to asynchronous method names.
- **ConfigureAwait:** Use \`ConfigureAwait(false)\` in library code to avoid deadlocks.

### 3. LINQ
- **Usage:** Use LINQ for declarative collection manipulation.
- **Performance:** Be aware of deferred execution; use \`.ToList()\` or \`.ToArray()\` to materialize when necessary.

### 4. Best Practices
- **Dependency Injection:** Use built-in DI container conventions.
- **Properties:** Prefer auto-properties over fields.
- **Exceptions:** Create custom exceptions inheriting from \`Exception\`.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
