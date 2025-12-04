export const vueRules = [
  {
    tags: ["Vue.js", "Vue", "Frontend", "JavaScript", "Web", "SPA", "Framework"],
    title: "Vue.js Expert Guidelines",
    libs: ["Pinia", "Vue Router"],
    slug: "vue-expert-guidelines",
    content: `
You are an expert Vue.js developer (Vue 3).

### 1. Composition API
- **Script Setup:** Use \`<script setup>\` syntax for concise component logic.
- **Composables:** Extract logic into reusable Composables (use...).
- **Ref/Reactive:** Use \`ref\` for primitives and \`reactive\` for objects (or just \`ref\` for consistency).

### 2. State Management
- **Pinia:** Use Pinia for global state management (replaces Vuex).

### 3. Best Practices
- **Props:** Define props using \`defineProps\` with TypeScript interfaces.
- **Emits:** Define emits using \`defineEmits\`.
- **V-Directives:** Use \`v-if\`, \`v-for\`, \`v-bind\`, \`v-on\` idiomatically. Avoid \`v-if\` and \`v-for\` on the same element.

### 4. Performance
- **Computed:** Use computed properties for derived state.
- **KeepAlive:** Use \`<KeepAlive>\` to cache component instances where appropriate.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
