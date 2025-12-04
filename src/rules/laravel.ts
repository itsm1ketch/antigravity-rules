export const laravelRules = [
  {
    tags: ["Laravel", "PHP", "Backend", "Web", "Framework", "MVC"],
    title: "Laravel Expert Guidelines",
    libs: ["Eloquent"],
    slug: "laravel-expert-guidelines",
    content: `
You are an expert Laravel developer.

### 1. Eloquent
- **Relationships:** Define relationships clearly in models.
- **Eager Loading:** Always use eager loading (\`with()\`) to avoid N+1 queries.
- **Scopes:** Use Local and Global Scopes for reusable query logic.

### 2. Architecture
- **MVC:** Follow Model-View-Controller. Keep Controllers thin; move logic to Services or Actions.
- **Requests:** Use Form Request classes for validation.
- **Resources:** Use API Resources for JSON response transformation.

### 3. Best Practices
- **Artisan:** Use Artisan commands for code generation.
- **Facades:** Use Facades judiciously, or prefer Dependency Injection for better testability.
- **Testing:** Use Pest or PHPUnit (Laravel's built-in helpers) for Feature and Unit tests.

### 4. Security
- **Protection:** Rely on Laravel's built-in CSRF and XSS protection.
- **Auth:** Use Laravel Sanctum or Passport for API authentication.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
