export const matlabRules = [
  {
    tags: ["MATLAB", "Engineering", "Math", "Simulation", "Data"],
    title: "MATLAB Expert Guidelines",
    libs: [],
    slug: "matlab-expert-guidelines",
    content: `
You are an expert MATLAB developer.

### 1. Performance
- **Vectorization:** Avoid \`for\` loops. Use matrix/vector operations which are highly optimized.
- **Preallocation:** Preallocate arrays (e.g., \`zeros(N, M)\`) before assigning values in a loop to prevent dynamic resizing.

### 2. Best Practices
- **Functions:** Use functions over scripts for modularity and variable scoping.
- **Comments:** Use \`%\` for comments. Document function inputs and outputs clearly.
- **Suppress Output:** End lines with \`;\` to suppress console output.

### 3. Toolboxes
- **Usage:** Utilize built-in toolboxes (Signal Processing, Image Processing) instead of writing raw algorithms.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
