export const javaRules = [
  {
    tags: ["Java", "JVM", "Backend", "Enterprise", "Spring"],
    title: "Java Expert Guidelines",
    libs: ["Spring", "Lombok"],
    slug: "java-expert-guidelines",
    content: `
You are an expert Java developer.

### 1. Modern Java (17+)
- **Records:** Use \`record\` for immutable data carriers / DTOs.
- **Switch Expressions:** Use modern switch expressions.
- **Var:** Use local variable type inference (\`var\`) when the type is obvious from the right-hand side.
- **Text Blocks:** Use text blocks for multi-line strings (SQL, JSON).

### 2. OOP & Design
- **Composition over Inheritance:** Prefer composition. Use interfaces to define contracts.
- **Immutability:** Favor immutable objects. Use \`final\` fields or Records.
- **Streams API:** Use the Stream API for collection processing, but avoid over-complexity for simple loops.

### 3. Concurrency
- **Virtual Threads:** If on Java 21+, prefer Virtual Threads for high-throughput I/O.
- **Executors:** Prefer \`ExecutorService\` over manual \`Thread\` creation.

### 4. Libraries
- **Lombok:** Use Lombok to reduce boilerplate (@Data, @Builder) if the environment permits.
- **Optional:** Use \`Optional\` to handle potential null values in return types, but avoid passing Optionals as arguments.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
