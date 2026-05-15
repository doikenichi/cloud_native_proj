# Windows 11 Cloud-Native Study Plan

Environment setup, build sequence, and curated learning references

Audience: beginner to cloud-native development with prior programming experience in Go, Java, and Python.
Scope: Node.js + Vue.js + Docker + Kubernetes + Terraform + path toward microservices and micro-frontends.

## How to use this plan

This roadmap is intentionally sequence-first. It tells you what to do next, what good looks like, and what to read or watch for that exact step.

The wording avoids exact shell commands and full code so that you focus on architecture, decision-making, and the order of operations.

For Windows 11, the fastest path is a thin host and a heavy project container: keep the host limited to platform tools, and do most language and CLI work inside a Dev Container.

## Recommended development environment on Windows 11

Recommended baseline stack: Windows Terminal, WSL 2 with Ubuntu, Docker Desktop using the WSL 2 backend, Visual Studio Code with Dev Containers, Git, and Docker Compose for the local multi-service loop. Add kind, kubectl, Helm, and k9s when you enter Kubernetes work. Consider Skaffold later for a faster Kubernetes inner loop.

### Why this is the best balance for your case

- It gives you Linux-like paths, tooling, and filesystem behavior without leaving Windows.
- It keeps your laptop setup stable: Docker, WSL, VS Code, and Git live on the host; app runtimes and most CLIs can live in the Dev Container.
- It lets you learn containers and Kubernetes in the same environment you will actually use to build the project.

### Host tools to install first

- Windows Terminal for shell tabs and profiles.
- WSL 2 plus one Ubuntu distribution for your Linux userland.
- Docker Desktop configured to use the WSL 2 backend.
- Visual Studio Code plus the Dev Containers extension.
- Git for Windows so both Windows and WSL workflows remain easy.

Nothing else unless you have a reason. Favor project-specific tooling inside the Dev Container.

### Tools to add later by phase

- Project phase: Node.js LTS, package manager, and test tools inside the Dev Container.
- Kubernetes phase: kind, kubectl, Helm, and k9s.
- Terraform phase: Terraform CLI and one cloud provider CLI only when you are ready to provision real infrastructure.
- Advanced inner-loop phase: Skaffold if full rebuild-and-redeploy cycles start slowing you down.

## Environment references

### Official documentation: Docker Desktop WSL 2 backend

Docker documents the WSL 2 backend as the recommended path for Linux-based container development on Windows. The guide covers enabling WSL integration and points to development best practices for Docker with WSL.

How it helps: This directly supports your Windows 11 setup and explains why Docker Desktop plus WSL 2 is the right base for Linux containers.

### Official documentation: Get started with Docker containers on WSL

Microsoft explains the Windows-side prerequisites and how Docker Desktop, WSL 2, and VS Code fit together. It frames the workflow as developing inside a Linux-based environment while keeping Windows as the host.

How it helps: This is the clearest vendor-backed explanation of the host and guest split you need to understand before building anything.

### Official documentation: Developing inside a Container

The VS Code docs explain how the Dev Containers extension uses a devcontainer.json file to create a full-featured development environment inside a container.

How it helps: This is the key piece that lets you keep your host thin and your project environment reproducible.

### Official specification: Development Containers

The Development Containers specification defines the model for portable development environments, including single-container and multi-container setups.

How it helps: This helps you understand that Dev Containers are not a VS Code trick; they are a reusable model for team-friendly development environments.

### Official documentation: Enable Kubernetes in Docker Desktop

Docker Desktop now provides a Kubernetes view and supports local cluster creation with either kubeadm single-node or kind multi-node options.

How it helps: This makes Docker Desktop a practical stepping stone into Kubernetes without requiring a separate VM or cloud account.

### Official documentation: kind Quick Start

kind runs local Kubernetes clusters using Docker container nodes. The quick start focuses on cluster creation and version selection.

How it helps: This is the most direct route from Docker Desktop into realistic Kubernetes practice on a laptop.

### Official documentation: Install Tools

The Kubernetes docs list the core local tools used for development, including kubectl and links to local cluster options such as kind and minikube.

How it helps: This is the canonical tool map for the Kubernetes phase of your study plan.

### Official documentation: Helm Docs Home

Helm describes itself as the package manager for Kubernetes and provides installation, templating, and chart guidance.

How it helps: This belongs in the environment baseline because you will use Helm after raw manifests.

### Tool documentation: K9s

K9s is a terminal UI for navigating and observing Kubernetes resources. It reduces friction when you are learning how objects relate inside a cluster.

How it helps: This is optional but high value for a beginner because it makes the cluster easier to inspect than raw kubectl output.

### Official documentation: Skaffold 2.0 Documentation

Skaffold automates the build, push, and deploy loop for Kubernetes applications and is designed for continuous development.

How it helps: This becomes useful once you have multiple services and want a tighter inner loop without hand-running every container and deployment step.

## Step 1 - Create the workspace and development container

Goal: Create one reproducible project workspace where backend, frontend, worker, and infrastructure can live together.

What to do (simple algorithm):

1. Create a single repository with top-level folders for backend, frontend, worker, infra, and docs.
2. Create a Dev Container definition that provides your baseline tools: Node.js, package manager, Git, and basic shell utilities. Do not try to include every future tool on day one.
3. Open the repository inside the Dev Container and confirm the editor, terminal, file watching, and package installation all work from inside the container.
4. Write a short README that explains what runs on the host and what runs inside the Dev Container.

You are done when:

- You can reopen the project in the Dev Container without manual machine-specific fixes.
- A new machine could clone the repository and reach the same tool baseline with minimal setup.
- You understand the mental model: Windows hosts Docker and VS Code; the Dev Container hosts your app toolchain.

### Keep this in mind:

- Do not install language runtimes in three places unless needed. Pick one main place to work: the Dev Container.
- Do not start with Kubernetes tools inside the host shell if the Dev Container will be your main workspace.

### References for this step

#### Official documentation: Create a Dev Container

This guide walks through the creation of a devcontainer.json file and explains how VS Code uses it to build or attach to your development environment.

How it helps: It gives you the exact mental model needed to set up a reproducible project workspace without overfitting to one laptop.

#### Official documentation: Developing inside a Container

This page explains daily usage: opening folders in containers, using editor features from inside the container, and understanding how containerized development behaves.

How it helps: It helps you turn Dev Containers into your default workflow rather than a one-time setup experiment.

#### Book: Node.js Design Patterns - Fourth Edition

The book overview highlights asynchronous architecture, testing, distributed systems, and scalable service design. It is especially useful as a long-running companion during the backend stages.

How it helps: Use the early architecture-related chapters while designing the backend workspace and service boundaries.

## Step 2 - Build the backend skeleton in Node.js

Goal: Create a small backend that is easy to evolve, not a large app that is hard to untangle later.

What to do (simple algorithm):

1. Start with a minimal API that can create and list one resource such as tasks.
2. Separate request handling from business logic early: routes should delegate, not think.
3. Create folders for routes, controllers, services, repositories, config, and tests even if some are almost empty at first.
4. Keep persistence fake or in-memory for the first pass so that you learn the application shape before database wiring.

You are done when:

- The API runs locally and one feature works end to end.
- Controllers are thin and business rules live in services.
- The codebase already has places for config, tests, and data access.

### Keep this in mind:

- Do not hide all logic inside route files.
- Do not add auth, queues, and background jobs yet. First prove the simplest request flow.

### References for this step

- Official documentation: Node.js documentation
- Official documentation: Express
- Tutorial: MDN Express web framework (Node.js/JavaScript)
- Book: Node.js Design Patterns, 4th edition

## Step 3 - Add persistence and API hardening

Goal: Move from a demo API to an API that behaves like a production service.

What to do (simple algorithm):

1. Introduce a database only after the route-controller-service-repository flow is clear.
2. Model one entity cleanly and put all data access behind a repository interface or module.
3. Add request validation, consistent error responses, and logging that makes failures understandable.
4. Document your API shape as you go so the frontend has a clear contract.

You are done when:

- Data survives app restarts.
- Invalid input is rejected clearly and consistently.
- Operational logs tell you what happened without exposing secrets.

### Keep this in mind:

- Do not let controllers talk directly to the database.
- Do not treat logging as print debugging; structure it as operational output.

### References for this step

- Book: Node.js Design Patterns - Fourth Edition
- Reference collection: Node.js Best Practices
- Recent tutorial: Node.js project architecture best practices

## Step 4 - Build the Vue frontend as a clean client

Goal: Create one Vue application that talks to the backend cleanly and is ready to evolve later.

What to do (simple algorithm):

1. Start with one Vue app, not micro-frontends. Create one page that lists tasks and one form that creates them.
2. Use Vue Router for pages and an API service layer so components are not directly responsible for HTTP details.
3. Use local component state first. Introduce Pinia only when cross-page or shared state becomes obvious.
4. Apply the Vue style guide for naming, component structure, and consistency before the codebase gets large.

You are done when:

- The frontend can create and read tasks through the backend API.
- Routing, API calls, and state responsibilities are easy to explain.
- The UI handles loading, empty, and error states instead of assuming the happy path.

### Keep this in mind:

- Do not mix routing, HTTP calls, and rendering logic into the same large component.
- Do not adopt global state too early; shared state should solve a real coordination problem.

### References for this step

- Official documentation: Vue Guide - Introduction
- Official tutorial: Vue Tutorial
- Official documentation: Vue Router
- Official documentation: Pinia state
- Official guidance: Vue Style Guide
- Video course platform: Vue Mastery courses

## Step 5 - Connect auth and user flow

Goal: Add authentication in a way that teaches clean boundaries between identity, session handling, and UI behavior.

What to do (simple algorithm):

1. Create login and signup flows only after the anonymous task flow works.
2. Make the backend responsible for validating credentials and issuing tokens or sessions.
3. Make the frontend responsible for route protection, login state display, and token attachment through a single API client layer.
4. Keep auth decisions in dedicated modules so they can later move into their own service if you adopt microservices.

You are done when:

- Protected routes reject anonymous access.
- The frontend responds gracefully to expired or missing auth state.
- Auth logic is not scattered across every component and route handler.

### Keep this in mind:

- Do not hard-code secrets or token behavior into components.
- Do not let every API call implement auth logic differently.

### References for this step

- Official documentation: Express
- Official documentation: Pinia state
- Book: Node.js Design Patterns - Fourth Edition

## Step 6 - Make the app production-ready before containers

Goal: Teach the application to behave well before packaging it.

What to do (simple algorithm):

1. Externalize configuration so ports, database URLs, and secrets come from environment-specific inputs.
2. Add structured logging and a health endpoint that reflects whether the service is actually ready for traffic.
3. Handle shutdown signals gracefully so the service can stop accepting new work and finish in-flight work cleanly.
4. Decide what the frontend needs for runtime configuration versus build-time configuration.

You are done when:

- The service starts, reports health, and shuts down predictably.
- Configuration values are not scattered through the codebase.
- The frontend and backend each have a clear configuration story.

### Keep this in mind:

- Do not package a service that still assumes it will run forever.
- Do not treat configuration files as code constants.

### References for this step

- Official documentation: Node.js documentation
- Reference collection: Node.js Best Practices
- Book: Node.js Design Patterns, 4th edition

## Step 7 - Containerize the backend and frontend

Goal: Turn both applications into predictable, portable artifacts.

What to do (simple algorithm):

1. Write one Dockerfile per deployable application: backend, frontend, and later worker.
2. Use multi-stage builds so compile-time or build-time dependencies do not stay in the final runtime image.
3. Keep the final runtime image small, explicit, and limited to what the process actually needs.
4. Verify that each container can start from environment variables and does not rely on local machine paths or tools.

You are done when:

- The containers start the same way on every machine.
- The final images are meaningfully smaller than a naive single-stage build.
- Application startup does not depend on host-specific assumptions.

### Keep this in mind:

- Do not copy the entire development environment into the production image.
- Do not use the container as a substitute for fixing application startup and shutdown behavior.

### References for this step

- Official documentation: Get started with Docker
- Official tutorial: Docker workshop
- Official documentation: Build best practices
- Official documentation: Multi-stage builds
- Training: Docker training resources

## Step 8 - Run the full system locally with Docker Compose

Goal: Prove the application as a multi-service system before adding Kubernetes.

What to do (simple algorithm):

1. Create one local composition that brings up frontend, backend, database, and later worker together.
2. Use service names and network-based communication instead of localhost assumptions between containers.
3. Make environment values explicit so each service knows how to find the others.
4. Treat this as your first realistic system diagram made executable.

You are done when:

- One local start action brings up the whole system.
- The frontend can reach the backend through container networking.
- You can explain service-to-service communication without relying on host shortcuts.

### Keep this in mind:

- Do not jump to Kubernetes before your application works cleanly as cooperating containers.
- Do not keep changing app code to compensate for unclear local networking.

### References for this step

- Official documentation: Docker Compose
- Official documentation: Develop with Docker and WSL 2
