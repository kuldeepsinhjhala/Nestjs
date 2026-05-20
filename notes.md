1. What is nestjs framework?
    - Nestjs is a robust and scalable nodejs framework that leverages typescript to build efficient and maintainable server-sice applications.
    - Nestjs is build on top of express and it offers a flexible architecture that can be adapted to various application needs. 
    - Nest Js leverages TypeScript as its programming language, to ensure strong type safety, leading to fewer runtime errors and improved code quality.
    - Its designed to be highly structured, adhering to the principles of modularity and dependency injection, making it a preferred choice for both small and large-scale projects. 
    - Also, Nest Js draws inspiration from Angular in Many ways.
    - NestJs is a robust and scalable Node Js framework that leverages Typescript to build efficient and maintainable server-side applications. 
    - (Typescript first) TS code -> compiled -> Js code -> Executes on Nodejs
    - (Modular Approach) Divides the code in modules, controllers, services and repositories which increases maintainability and testability. 
    - Supports Dependency injection. 
    - Supports Fastify and express behind the scenes. 
    - Build in support for Testing and mocking.
    - Growing community and ecosystem.
    - Modular architecture and dependency injection helps nestjs to build microservices. 

2. Setting up development Environment for Nestjs 
    - Install Nodejs
    - Install Nestjs CLI
    - Code Editor
    - node --version
    - npm --version
    - nest --version

3. nest --help (Gives all important nestjs commands)

4. nest new projectName (Used to create project of nest-js)

5. Compile and run the project (refere the package.json)
    - npm run build
    - npm run start:dev
    - npm run start

6. (src/main.ts) is the entry point of the project. Whenever we run the project it is the entry point. 

17. File & Folder structure
    - Package.json: It is the heart of any NodeJS project. It contains metadata about your project, such as its name, version, author, and dependencies. It also lists scripts for common tasks like starting the development server, running tests & building the project. 
    - tsconfig.json: It configures the Typescript compiler, defining how typescript code is compiled into javascript. It includes settings for target Javascript version, module system, and other compiler options.  
    - nest-cli.sjon: This file is specific to Nestjs project and contains configuration options for the Nest CLI, such as the default application path and generator options. 
    - test folder: This directory contains and unit and integration test of the applicatoin.
    - dist folder: This directory will contain the compiled Javascript files after building your project. 
    - src folder: We write code in this folder. 

18. Src folder
    - app.module.ts: Root module of the application. It imports and exports other modules, controllers and providers. We segragate our code using modules. This is main module of application. 
    - app.controller.ts: This file defiens main controller of the application. First request will go to app controller. From that it will go to other controller. Responsible for handling the request and sending the response. This is main controller of the application.
    - app.service.ts: This file is used to define the main business logic of the application. There can be other service file. This is the main service of the application. 
    - main.ts: Entry point of nestjs application. First file which will execute. Starting the application. Bootstraping the application. Main file of nestjs application which will be executed. 

19. How Nestjs App Bootstraps
    - Import NestFactory from nestcore
    - Import App module
    - Create an async bootstrap method.
        - using the create method of NestFactory & passing AppModule (RootModule) to the Argument of create function. It will create an instance of nest application. Represents core fo nestjs application. 
    - Appstarts
        - Main.ts
            - server-starts
            - app.module.ts
                - other moduels
                - controllers
                - providers
            - other configurations
20. Modules
    - Modules are the fundamental building block of Nestjs application that encapsulates related controllers, services, providers & other components. They promote code organization, reusability and testability.
    - Modularity: Modules break down the application into smaller, self-contained units, making it easier to manage and understand.  
    - Dependency Injection: Nestjs uses dependency injection to provide modules with the necessary dependencies, promoting loose coupling and testability. 
    - Providers: Providers can be services, controllers, or other classes that are managed by the module. 
    - Exports: Modules can export providers and other components that can be used by other modules. 
    - By default when we create an app using nestjs cli it comes with one default module (app module) (root module).
    - AddModule (app.module.ts)
        - AppController (app.controller.ts)
        - AppService (app.service.ts)
        - (app.controller.spec.ts)
    - A module can have different type of files associated with it. Which can perform different things. 
        - Controller: Handles incoming HTTP requests & routes them to appropriate handler. 
        - Service: Contains the business logic for the module. Handles data access, calculation & other core functions. 
        - Entity: Defines the structure of database entities. Used when interacting with database like TypeORM. 
        - Test File: Contains the unit test for the controller to ensure its functionality. 
    - when we define an user-defined module we have to follow below steps:-
        - Module file: Create a file with the module name. By convention, the module file name should have a module in it, which specify that, the file contains a module class. 
        - Module Class: A module is nothing but a Typescript class decorated with @Module decorator. 
        - Import Module: The module class must be imported in root module of your Nest Js application. 
    - Main.ts
        - AppModule
            - UserModule
            - TweetModule
    - Two user-defined module can be also connected. 

21. How to create an Module
    - You can manually create an module and link it with the app.moudle.
    - You can also create an module automatically by:
        - nest g module tweet (here the tweet is module name)
            - It will create and folder in src name 'tweet'
            - Inside 'tweet' folder it will create an tweet.module.ts file.
            - It will update app.module.ts by importing the tweet module and adding it in the imports of it. 