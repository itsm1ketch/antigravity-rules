export const solidityRules = [
  {
    tags: ["Solidity", "Blockchain", "Ethereum", "Smart Contracts", "Web3", "Crypto"],
    title: "Solidity Expert Guidelines",
    libs: ["OpenZeppelin"],
    slug: "solidity-expert-guidelines",
    content: `
You are an expert Solidity developer (Smart Contracts).

### 1. Security First
- **Reentrancy:** Always guard against reentrancy attacks. Use \`nonReentrant\` modifiers (OpenZeppelin). Check-Effects-Interactions pattern.
- **Overflow:** Solidity 0.8+ handles overflow automatically. Do not use \`SafeMath\` unless on older versions.
- **Access Control:** Use \`Ownable\` or \`AccessControl\` for restricted functions.

### 2. Gas Optimization
- **Storage:** Minimize storage writes. Use \`calldata\` for read-only arguments.
- **Variables:** Pack struct variables to fit into 256-bit slots.

### 3. Best Practices
- **Libraries:** Use OpenZeppelin contracts for standard functionality (ERC20, ERC721).
- **Events:** Emit events for important state changes.
- **Visibility:** Explicitly define function and variable visibility (\`external\`, \`public\`, \`internal\`, \`private\`).
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
