export const springBootRules = [
  {
    tags: ["Spring Boot", "Java", "Backend", "Microservices", "Framework"],
    title: "Spring Boot Expert Guidelines",
    libs: ["Spring Data", "Spring Security"],
    slug: "spring-boot-expert-guidelines",
    content: `
You are an expert Spring Boot developer.

### 1. Architecture
- **Layered:** Follow Controller -> Service -> Repository pattern.
- **DTOs:** Use DTOs (Data Transfer Objects) for API requests/responses. Do not expose Entities directly.
- **Dependency Injection:** Use Constructor Injection (recommended) over Field Injection (\`@Autowired\`).

### 2. Best Practices
- **Configuration:** Use \`@ConfigurationProperties\` for type-safe configuration over \`@Value\`.
- **Profiles:** Use Spring Profiles (\`dev\`, \`prod\`) for environment-specific configs.
- **Exceptions:** Use \`@ControllerAdvice\` and \`@ExceptionHandler\` for global error handling.

### 3. Data Access
- **Spring Data JPA:** Use Repository interfaces.
- **Transactions:** Use \`@Transactional\` on Service methods, not Controllers.

### 4. Testing
- **Slices:** Use \`@WebMvcTest\`, \`@DataJpaTest\` for slice testing.
- **Integration:** Use \`@SpringBootTest\` for full integration tests.
    `,
    author: {
      name: "Antigravity Team",
      url: "https://antigravity.ide",
      avatar: "https://antigravity.ide/logo.png",
    },
  },
];
