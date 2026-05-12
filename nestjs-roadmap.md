# NestJS Learning Roadmap (Beginner → Advanced)

A complete, in-depth roadmap covering TypeScript, OOP, Dependency Injection, and NestJS. Work through it sequentially — each phase builds on the previous one. Don't skip OOP even if it feels boring; NestJS will not click without it.

---

## Phase 1: TypeScript Foundations

Before OOP, make sure your TypeScript fundamentals are rock solid.

- [ DONE ] Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
- [ ] Arrays and tuples
- [ ] `any` vs `unknown` vs `never` vs `void` (and when to use each)
- [ ] Union types (`A | B`) and intersection types (`A & B`)
- [ ] Literal types and string literal unions
- [ ] Type aliases vs interfaces (and when to pick which)
- [ ] Optional properties (`?`) and readonly properties
- [ ] Function types, parameter types, return types
- [ ] Optional and default parameters
- [ ] Rest parameters and spread
- [ ] Generics: basics (`<T>`), constraints (`<T extends X>`), default generics
- [ ] Utility types: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `Readonly`, `ReturnType`
- [ ] Type narrowing: `typeof`, `instanceof`, `in`, custom type guards
- [ ] Type assertions (`as`) and when they're a code smell
- [ ] `enum` vs union of literals (modern preference is unions)
- [ ] Modules: `import` / `export`, default vs named exports
- [ ] `tsconfig.json` essentials: `strict`, `target`, `module`, `experimentalDecorators`, `emitDecoratorMetadata`

**Mini-project**: Build a small CLI tool (e.g., a task tracker) using only types, interfaces, and functions — no classes yet.

---

## Phase 2: Object-Oriented Programming in Depth

This is non-negotiable for NestJS. Spend real time here.

### 2.1 Class Basics
- [ ] Defining a class, properties, and methods
- [ ] Constructors and the `this` keyword
- [ ] Constructor shorthand (parameter properties)
- [ ] Instance vs static members (`static`)
- [ ] Method overloading (TS-style)
- [ ] `readonly` properties

### 2.2 Access Modifiers
- [ ] `public` (default)
- [ ] `private` (TS keyword) vs `#privateField` (JS native)
- [ ] `protected` (accessible in subclasses)
- [ ] When to expose vs hide state

### 2.3 The Four Pillars of OOP
- [ ] **Encapsulation**: bundling data + methods, hiding internals
- [ ] **Inheritance**: `extends`, `super()`, overriding methods
- [ ] **Polymorphism**: same method, different behavior across subclasses
- [ ] **Abstraction**: abstract classes (`abstract` keyword), abstract methods

### 2.4 Interfaces vs Abstract Classes
- [ ] Implementing interfaces (`implements`)
- [ ] Multiple interface implementation
- [ ] When to use abstract class vs interface
- [ ] Interfaces for contracts (huge in NestJS)

### 2.5 Advanced OOP Concepts
- [ ] Getters and setters (`get` / `set`)
- [ ] Static factory methods
- [ ] Composition over inheritance (very important mindset)
- [ ] Mixins (basic awareness)
- [ ] Method chaining / fluent interfaces

### 2.6 SOLID Principles
- [ ] **S** — Single Responsibility Principle
- [ ] **O** — Open/Closed Principle
- [ ] **L** — Liskov Substitution Principle
- [ ] **I** — Interface Segregation Principle
- [ ] **D** — Dependency Inversion Principle (foundation of DI)

### 2.7 Common Design Patterns (just basics)
- [ ] Singleton (relevant — NestJS providers are singletons by default)
- [ ] Factory pattern
- [ ] Strategy pattern
- [ ] Repository pattern (used heavily in NestJS data layers)
- [ ] Dependency Injection pattern

**Mini-project**: Rebuild your CLI from Phase 1 using classes — a `TaskManager` class, a `Task` class, maybe a `Storage` interface with `FileStorage` and `MemoryStorage` implementations.

---

## Phase 3: Dependency Injection (Without NestJS)

Understand DI conceptually before NestJS abstracts it for you.

- [ ] What is "Inversion of Control" (IoC)?
- [ ] The problem DI solves: tight coupling
- [ ] Constructor injection vs property injection vs setter injection
- [ ] Manually wiring dependencies (no framework)
- [ ] Build a tiny DI container yourself (educational — ~50 lines of code)
- [ ] Swapping real dependencies with mocks for testing
- [ ] Why DI makes unit testing easy
- [ ] Service lifetimes: singleton, transient, scoped

**Mini-project**: Take your Phase 2 CLI and refactor `TaskManager` so it receives its `Storage` through the constructor. Then write a fake/mock `Storage` for testing.

---

## Phase 4: TypeScript Decorators & Metadata

NestJS is decorator-driven. You don't need to write decorators, but you must understand them.

- [ ] Enabling decorators in `tsconfig.json`
- [ ] Class decorators
- [ ] Method decorators
- [ ] Property decorators
- [ ] Parameter decorators
- [ ] Decorator factories (decorators that take arguments)
- [ ] The `reflect-metadata` package and what it does
- [ ] How frameworks use metadata to wire things up

**Mini-project**: Write a simple `@LogMethod` decorator that logs every method call. This will demystify NestJS decorators completely.

---

## Phase 5: Node.js & HTTP Foundations

If you're rusty on these, brush up before NestJS.

- [ ] Node.js event loop (high level)
- [ ] `npm` / `pnpm` / `yarn` basics
- [ ] CommonJS vs ES Modules
- [ ] HTTP methods: GET, POST, PUT, PATCH, DELETE
- [ ] HTTP status codes (2xx, 3xx, 4xx, 5xx)
- [ ] Headers, query params, route params, request body
- [ ] REST principles (resources, statelessness, conventions)
- [ ] JSON and content types
- [ ] Basic Express.js (NestJS uses it under the hood by default)
- [ ] CORS, cookies, sessions (just the concept)

---

## Phase 6: NestJS Core Architecture

Now the real thing. Don't skip ahead — build everything in order.

### 6.1 Setup & Project Structure
- [ ] Install Nest CLI: `npm i -g @nestjs/cli`
- [ ] Generate a new project: `nest new my-app`
- [ ] Understand the default folder structure
- [ ] `main.ts` and the bootstrap process
- [ ] Run, build, watch mode

### 6.2 Modules
- [ ] What is a module? Why does it exist?
- [ ] The root `AppModule`
- [ ] `@Module({ imports, controllers, providers, exports })`
- [ ] Feature modules
- [ ] Shared modules
- [ ] Global modules (`@Global()`)
- [ ] Dynamic modules (e.g., `forRoot`, `forFeature`)
- [ ] Re-exporting modules

### 6.3 Controllers
- [ ] `@Controller('path')` decorator
- [ ] Route handlers: `@Get`, `@Post`, `@Put`, `@Patch`, `@Delete`
- [ ] Route params: `@Param`
- [ ] Query params: `@Query`
- [ ] Request body: `@Body`
- [ ] Headers: `@Headers`
- [ ] HTTP status: `@HttpCode`, `@Header`
- [ ] Redirects: `@Redirect`
- [ ] Returning data (sync, async, observables)

### 6.4 Providers & Services
- [ ] `@Injectable()` decorator
- [ ] Creating a service
- [ ] Constructor injection in NestJS
- [ ] Provider scopes: `DEFAULT` (singleton), `REQUEST`, `TRANSIENT`
- [ ] Custom providers: `useClass`, `useValue`, `useFactory`, `useExisting`
- [ ] Async providers
- [ ] Injection tokens (string and symbol-based)

### 6.5 The Request Lifecycle
- [ ] Middleware → Guards → Interceptors (pre) → Pipes → Controller → Service → Interceptors (post) → Exception Filters
- [ ] Draw this flow on paper until you can recite it

---

## Phase 7: NestJS Cross-Cutting Concerns

Layer these in one at a time.

### 7.1 Pipes (Validation & Transformation)
- [ ] Built-in pipes: `ParseIntPipe`, `ParseUUIDPipe`, `ParseBoolPipe`, etc.
- [ ] `ValidationPipe` with `class-validator` and `class-transformer`
- [ ] DTOs (Data Transfer Objects)
- [ ] Custom pipes
- [ ] Global, controller-level, and method-level pipes

### 7.2 Guards (Authorization)
- [ ] `CanActivate` interface
- [ ] Built-in `AuthGuard` patterns
- [ ] Custom guards
- [ ] Role-based guards with `@SetMetadata` and `Reflector`
- [ ] Combining guards

### 7.3 Interceptors
- [ ] `NestInterceptor` interface and `CallHandler`
- [ ] Logging interceptor
- [ ] Response transformation
- [ ] Caching interceptor
- [ ] Timeout interceptor

### 7.4 Exception Filters
- [ ] Built-in exceptions: `BadRequestException`, `NotFoundException`, `UnauthorizedException`, `ForbiddenException`, etc.
- [ ] `HttpException` base class
- [ ] Custom exception filters
- [ ] Global exception filters

### 7.5 Middleware
- [ ] Function vs class middleware
- [ ] Applying middleware in modules (`configure(consumer)`)
- [ ] Route-specific middleware
- [ ] When to use middleware vs guards vs interceptors

### 7.6 Custom Decorators
- [ ] Param decorators (e.g., `@CurrentUser()`)
- [ ] Composing decorators with `applyDecorators`

---

## Phase 8: Configuration & Environment

- [ ] `@nestjs/config` package
- [ ] `.env` files and `ConfigModule`
- [ ] Validation of env variables (with Joi or class-validator)
- [ ] Per-environment configs (dev, staging, prod)
- [ ] Custom configuration files

---

## Phase 9: Database Integration

Pick one ORM and go deep. Prisma is modern and friendly; TypeORM is the "official" Nest-style choice.

### 9.1 Choose Your Tool
- [ ] **Option A**: TypeORM with `@nestjs/typeorm`
- [ ] **Option B**: Prisma with `@prisma/client`
- [ ] **Option C**: Mongoose for MongoDB

### 9.2 Core Database Concepts
- [ ] Connection setup
- [ ] Defining entities/models
- [ ] Relationships: one-to-one, one-to-many, many-to-many
- [ ] Migrations
- [ ] Repositories and the repository pattern
- [ ] Transactions
- [ ] Soft deletes
- [ ] Seeding data

### 9.3 Common Patterns
- [ ] Service → Repository → Database layering
- [ ] Pagination, filtering, sorting
- [ ] N+1 query problem and how to avoid it

---

## Phase 10: Authentication & Authorization

- [ ] Passport.js basics with `@nestjs/passport`
- [ ] Local strategy (username + password)
- [ ] JWT strategy
- [ ] Refresh tokens
- [ ] Hashing passwords with `bcrypt` / `argon2`
- [ ] Role-based access control (RBAC)
- [ ] Permission-based access control
- [ ] Session-based auth (alternative to JWT)
- [ ] OAuth2 / Google / GitHub login
- [ ] API key authentication

---

## Phase 11: Testing

- [ ] Unit testing with Jest (built into Nest)
- [ ] `Test.createTestingModule` and overriding providers
- [ ] Mocking services
- [ ] Testing controllers
- [ ] Testing services
- [ ] Testing guards, pipes, interceptors
- [ ] E2E testing with Supertest
- [ ] Test coverage and CI integration

---

## Phase 12: Advanced NestJS

### 12.1 API Documentation
- [ ] Swagger / OpenAPI with `@nestjs/swagger`
- [ ] Decorators for DTOs and responses
- [ ] Authentication in Swagger UI

### 12.2 Logging
- [ ] Built-in `Logger`
- [ ] Custom logger
- [ ] Integrating Winston or Pino

### 12.3 Caching
- [ ] `@nestjs/cache-manager`
- [ ] In-memory cache
- [ ] Redis cache

### 12.4 Task Scheduling & Queues
- [ ] `@nestjs/schedule` for cron jobs
- [ ] BullMQ with `@nestjs/bullmq` for background jobs

### 12.5 File Uploads
- [ ] `Multer` integration
- [ ] Single and multiple file uploads
- [ ] Storing on disk vs S3 / cloud

### 12.6 WebSockets & Real-Time
- [ ] `@nestjs/websockets` and gateways
- [ ] Socket.IO vs native WS
- [ ] Rooms, namespaces, broadcasts

### 12.7 GraphQL (Optional)
- [ ] `@nestjs/graphql` with Apollo
- [ ] Code-first vs schema-first
- [ ] Resolvers, queries, mutations, subscriptions

### 12.8 Microservices
- [ ] Transport layers: TCP, Redis, NATS, Kafka, RabbitMQ
- [ ] Message patterns vs event patterns
- [ ] Hybrid applications (HTTP + microservice)

### 12.9 CQRS
- [ ] Commands, queries, events
- [ ] `@nestjs/cqrs` module
- [ ] Event sourcing basics

---

## Phase 13: Production Readiness

- [ ] Environment-based config and secrets management
- [ ] Health checks with `@nestjs/terminus`
- [ ] Graceful shutdown hooks
- [ ] Rate limiting with `@nestjs/throttler`
- [ ] Helmet, CORS, CSRF protection
- [ ] Compression
- [ ] Structured logging and request IDs
- [ ] Error tracking (Sentry integration)
- [ ] Performance: switching to Fastify adapter
- [ ] Dockerizing a Nest app
- [ ] Multi-stage Dockerfiles
- [ ] CI/CD basics (GitHub Actions)
- [ ] Deploying to Railway, Render, AWS, or your platform of choice

---

## Phase 14: Architecture Patterns at Scale

Once you're comfortable, study how big Nest apps are structured.

- [ ] Layered architecture (Controller → Service → Repository)
- [ ] Domain-Driven Design (DDD) basics
- [ ] Hexagonal / Clean Architecture in NestJS
- [ ] Monorepo with Nest (`nest g app` and libraries)
- [ ] Modular monolith principles
- [ ] When (and when not) to split into microservices

---

## Final Capstone Projects

Build at least two of these end-to-end.

- [ ] **Project 1 — Blog API**: users, posts, comments, JWT auth, role-based permissions, pagination
- [ ] **Project 2 — E-commerce backend**: products, cart, orders, payments (Stripe), inventory, admin module
- [ ] **Project 3 — Real-time chat**: WebSockets, rooms, message persistence, online presence
- [ ] **Project 4 — Job board with background processing**: BullMQ queues, scheduled jobs, email notifications

---

## Tips for the Journey

- Don't read NestJS docs cover-to-cover. Use them as reference when you hit a problem.
- Build something at every phase. Reading without coding will not stick.
- Re-read the request lifecycle diagram every few weeks until it's automatic.
- When stuck, ask: "Is this a Module problem, a Provider problem, or a Lifecycle problem?" — most issues fall into one of those three buckets.
- Embrace the boilerplate. NestJS asks for structure upfront so it scales later.
