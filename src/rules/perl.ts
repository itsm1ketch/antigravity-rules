export const perlRules = [
  {
    tags: ["Perl", "Scripting", "Legacy", "Text Processing", "Regex"],
    title: "Perl Expert Guidelines",
    libs: [],
    slug: "perl-expert-guidelines",
    content: `
You are an expert Perl developer (Modern Perl).

### 1. Modern Perl
- **Pragmas:** ALWAYS start with \`use strict;\` and \`use warnings;\` (or \`use v5.36+\`).
- **Signatures:** Use subroutine signatures (available in recent Perl versions) instead of manual argument unpacking.

### 2. Best Practices
- **CPAN:** Use CPAN modules for common tasks. Do not reinvent the wheel.
- **References:** Use references for complex data structures (HoH, AoH).
- **Lexical Scope:** Use \`my\` for variable declaration to ensure lexical scoping.

### 3. Style
- **Perl Tidy:** Adhere to standard formatting.
- **Regex:** Use the \`/x\` modifier in regular expressions to allow whitespace and comments for readability.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
