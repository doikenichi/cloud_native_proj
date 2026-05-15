# cloud_native_proj

## Project structure

This repository is organized for a cloud-native full-stack study project:

- `be/` — backend service code
- `fe/` — frontend application code
- `worker/` — background worker or task processing code
- `infra/` — infrastructure and deployment configuration
- `docs/` — documentation and study plans

## Dev Container workflow

This project is intended to be opened inside the VS Code Dev Container.
The container hosts the application toolchain, including:

- Node.js and npm
- Git
- shell utilities
- the editor terminal and file watcher environment

### What runs where

- Host machine: Docker Desktop / WSL 2, VS Code, and Git installation
- Dev Container: the repository, package installation, and application runtime

### Getting started

1. Open the repository in VS Code.
2. Use the Dev Containers extension to reopen in container.
3. Confirm the terminal, package install, and the editor work from inside the container.

## Notes

The Dev Container is configured in `.devcontainer/devcontainer.json`.
It uses the Microsoft `typescript-node` image and installs dependencies with `npm install` after creation.
