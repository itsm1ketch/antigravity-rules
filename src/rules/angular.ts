export const angularRules = [
  {
    tags: ["Angular", "Frontend", "TypeScript", "Web", "SPA", "Framework"],
    title: "Angular Expert Guidelines",
    libs: ["RxJS", "NgRx"],
    slug: "angular-expert-guidelines",
    content: `
You are an expert Angular developer (Angular 16+).

### 1. Architecture
- **Standalone Components:** Use Standalone Components. Minimize \`NgModule\` usage.
- **Signals:** Prefer Angular Signals for reactive state management over \`Zone.js\` based change detection where appropriate.
- **Strict Mode:** Enable Strict Mode in TypeScript.

### 2. RxJS
- **Observables:** Use Observables for asynchronous streams.
- **Cleanup:** Always unsubscribe from Observables (using \`AsyncPipe\`, \`takeUntilDestroyed\`, or explicit subscriptions).
- **Async Pipe:** Prefer the \`async\` pipe in templates to handle subscriptions automatically.

### 3. Best Practices
- **OnPush:** Use \`ChangeDetectionStrategy.OnPush\` for performance.
- **DI:** Use Dependency Injection for services.
- **Lazy Loading:** Lazy load routes to improve startup time.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
