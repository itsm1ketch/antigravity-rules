export const groovyRules = [
  {
    tags: ["Groovy", "JVM", "Scripting", "Jenkins", "Testing"],
    title: "Groovy Expert Guidelines",
    libs: ["Spock"],
    slug: "groovy-expert-guidelines",
    content: `
You are an expert Groovy developer.

### 1. Features
- **Dynamic:** Embrace dynamic typing where it simplifies code (e.g., scripting, Jenkinsfiles), but use \`@CompileStatic\` for performance-critical library code.
- **Closures:** Use closures effectively for iteration and callbacks.
- **GStrings:** Use GStrings (\`"Value: $x"\`) for interpolation.

### 2. Syntax
- **Optional:** Semicolons and \`return\` keywords are optional. Omit them for cleaner code.
- **Properties:** Use direct property access (JavaBeans convention).

### 3. Testing (Spock)
- **Spock:** If testing, Spock is the gold standard in Groovy. Use \`given/when/then\` blocks.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
