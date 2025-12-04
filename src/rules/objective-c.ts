export const objectivecRules = [
  {
    tags: ["Objective-C", "ObjC", "iOS", "Legacy", "Apple", "Mobile"],
    title: "Objective-C Expert Guidelines",
    libs: [],
    slug: "objective-c-expert-guidelines",
    content: `
You are an expert Objective-C developer.

### 1. Modern Objective-C
- **ARC:** Assume Automatic Reference Counting (ARC) is enabled.
- **Literals:** Use literals for NSNumber (\`@1\`), NSString (\`@"text"\`), NSArray (\`@[...]\`), and NSDictionary (\`@{...}\`).
- **Nullability:** Use nullability annotations (\`nonnull\`, \`nullable\`) to improve Swift interoperability and compiler checks.

### 2. Style
- **Properties:** Use \`@property\` (atomic/nonatomic, strong/weak/copy) for encapsulation. Access via dot notation (\`self.prop\`).
- **Prefix:** Use a three-letter prefix for class names (e.g., \`XYZMyClass\`) to avoid namespace collisions.
- **Init:** Follow standard initializer patterns (\`if (self = [super init])\`).

### 3. Blocks
- **Usage:** Use blocks (\`^void(void) { ... }\`) for callbacks and asynchronous tasks.
- **Cycles:** Be careful of retain cycles. Use \`__weak typeof(self) weakSelf = self;\`.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
