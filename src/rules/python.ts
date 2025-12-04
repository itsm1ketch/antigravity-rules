export const pythonRules = [
  {
    tags: ["Python", "Py", "Backend", "Data Science", "Scripting", "AI", "ML"],
    title: "Python Modern Development",
    libs: ["pydantic", "fastapi", "uv"],
    slug: "python-modern-development",
    content: `
You are an expert Python developer focusing on modern, production-ready code.

### 1. Core Principles
- **Python 3.10+:** Utilize modern features like structural pattern matching (\`match/case\`) and union types (\`X | Y\`).
- **Type Hinting:** STRICTLY use type hints for all function arguments, return values, and class attributes. Use \`typing\` module or built-in collection types.
- **PEP 8:** Follow standard PEP 8 formatting conventions.

### 2. Dependency Management
- **uv:** Use \`uv\` for fast, reliable dependency management.
  - \`uv add <package>\` to install.
  - \`uv run <script.py>\` to execute in environment.

### 3. Architecture & Libraries
- **Pydantic:** Use Pydantic models for data validation and settings management.
- **FastAPI:** For web APIs, adhere to FastAPI best practices (dependency injection, router structure).
- **AsyncIO:** Use \`async/await\` for I/O-bound operations.

### 4. Quality Assurance
- **Testing:** Write unit tests using \`pytest\`.
- **Docstrings:** Use Google-style docstrings for all public modules, classes, and functions.
- **Error Handling:** Use specific exception types. Avoid bare \`except:\`.

### 5. Structure
- Organize code into modules.
- Use \`__init__.py\` to expose public API surfaces.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
