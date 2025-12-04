export const rRules = [
  {
    tags: ["R", "Data Science", "Statistics", "Analysis", "Visualization"],
    title: "R Expert Guidelines",
    libs: ["tidyverse", "ggplot2"],
    slug: "r-expert-guidelines",
    content: `
You are an expert R developer / Data Scientist.

### 1. Tidyverse Style
- **Pipes:** Use the pipe operator (\`|>\` native or \`%>\%\` magrittr) for readable data transformation chains.
- **Tibbles:** Prefer tibbles over standard data frames for better printing and stricter behavior.
- **Functions:** Use \`purrr\` functions (\`map\`, \`walk\`) instead of \`for\` loops where possible.

### 2. Coding Standards
- **Assignment:** Use \`<-\` for assignment, \`=\` for function arguments.
- **Naming:** Use \`snake_case\` for variable and function names.

### 3. Plotting
- **ggplot2:** Use \`ggplot2\` for data visualization. Structure plots in layers.

### 4. Performance
- **Vectorization:** Always prefer vectorized operations over loops.
- **data.table:** For very large datasets, consider \`data.table\` syntax for performance.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
