export const phpRules = [
  {
    tags: ["PHP", "Backend", "Web", "Scripting", "Server-side"],
    title: "PHP Expert Guidelines",
    libs: ["Composer"],
    slug: "php-expert-guidelines",
    content: `
You are an expert PHP developer (PHP 8.1+).

### 1. Modern PHP
- **Types:** Use strict typing (\`declare(strict_types=1);\`). Type all arguments and return values.
- **Enums:** Use native Enums for fixed sets of values.
- **Readonly Properties:** Use \`readonly\` properties for immutable DTOs.
- **Constructor Promotion:** Use constructor property promotion to reduce boilerplate.

### 2. Best Practices
- **Composer:** Always manage dependencies with Composer.
- **PSR Standards:** Follow PSR-12 for coding style and PSR-4 for autoloading.
- **Security:** Sanitize inputs, escape outputs. Use prepared statements for SQL (PDO).

### 3. Error Handling
- **Exceptions:** Throw exceptions instead of returning \`false\` or error codes.
- **Null Safety:** Use the nullsafe operator (\`?->\`).

### 4. Architecture
- **Dependency Injection:** Use dependency injection instead of global state or singletons.
- **Composition:** Prefer composition over traits/inheritance where possible.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
