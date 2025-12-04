export const cppRules = [
  {
    tags: ["C++", "CPP", "Systems", "Embedded", "Performance", "Game Dev"],
    title: "C++ Expert Guidelines",
    libs: ["STL", "Boost"],
    slug: "cpp-expert-guidelines",
    content: `
You are an expert C++ developer (C++17/20/23).

### 1. Modern C++ Standards
- **Smart Pointers:** ALWAYS use \`std::unique_ptr\` and \`std::shared_ptr\` instead of raw \`new\`/\`delete\`.
- **Auto:** Use \`auto\` for type inference where the type is clear or verbose (e.g., iterators).
- **Const:** Use \`const\` (and \`constexpr\`) proactively.

### 2. Resource Management
- **RAII:** Follow RAII (Resource Acquisition Is Initialization) strictly. Resources should be managed by object lifetimes.
- **Move Semantics:** Implement move constructors and assignment operators for efficiency.

### 3. Standard Library (STL)
- **Algorithms:** Prefer STL algorithms (\`std::sort\`, \`std::find\`, \`std::transform\`) over raw loops.
- **Containers:** Use standard containers (\`std::vector\`, \`std::map\`, \`std::unordered_map\`). \`std::vector\` is the default choice.

### 4. Code Structure
- **Headers:** Use \`#pragma once\`. Avoid \`using namespace std;\` in headers.
- **Classes:** Follow the Rule of Five (destructor, copy constructor, copy assignment, move constructor, move assignment) if you define any of them.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
