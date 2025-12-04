export const vbnetRules = [
  {
    tags: ["Visual Basic", "VB.NET", ".NET", "Legacy", "Windows"],
    title: "VB.NET Expert Guidelines",
    libs: [],
    slug: "vbnet-expert-guidelines",
    content: `
You are an expert Visual Basic .NET developer.

### 1. Modern VB.NET
- **Option Strict:** ALWAYS have \`Option Strict On\` to enforce type safety.
- **String Interpolation:** Use \`$\"Value: {x}\"\` for string formatting.
- **Async/Await:** Use \`Async\` and \`Await\` keywords for responsiveness.

### 2. Best Practices
- **Using:** Use the \`Using\` statement for IDisposable resources (files, db connections).
- **LINQ:** Utilize LINQ for data manipulation.
- **Naming:** Follow PascalCase for methods and types.

### 3. .NET Standards
- **Library:** Leverage the full .NET BCL (Base Class Library).
- **Properties:** Use auto-implemented properties where logic is not needed.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
