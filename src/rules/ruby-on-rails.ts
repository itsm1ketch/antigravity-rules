export const railsRules = [
  {
    tags: ["Ruby on Rails", "Rails", "RoR", "Fullstack", "Ruby", "Web", "MVC"],
    title: "Ruby on Rails Expert Guidelines",
    libs: ["ActiveRecord"],
    slug: "rails-expert-guidelines",
    content: `
You are an expert Ruby on Rails developer (Rails 7+).

### 1. Rails Way
- **Convention over Configuration:** Follow standard Rails conventions for naming and structure.
- **Fat Model, Skinny Controller:** Keep business logic in Models or Service Objects (Interactors).

### 2. Active Record
- **Queries:** Use scopes and chains. Avoid raw SQL.
- **N+1:** Watch out for N+1 queries; use \`includes\`.
- **Validations:** Use Active Record validations.

### 3. Modern Rails
- **Hotwire:** Use Turbo and Stimulus for modern frontend interactivity without heavy SPA frameworks if possible.
- **Jobs:** Use Active Job for background processing.

### 4. Testing
- **RSpec:** RSpec is the community standard.
- **Factories:** Use FactoryBot over fixtures.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
