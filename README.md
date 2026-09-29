# GitOps Demo Shop

A professional 3-tier demo application that will be progressively transformed into a GitOps-managed Kubernetes deployment.

## Architecture

```text
Browser
   |
   v
Frontend (Nginx)
   |
   v
Backend API (Flask)
   |
   v
PostgreSQL (added in the persistence stage)
```

## Technology Stack

- Frontend: HTML5, CSS3, JavaScript
- Web server: Nginx
- Backend: Python 3.12, Flask
- API: REST/JSON
- Database: PostgreSQL (introduced in the database stage)
- Containerization: Docker
- Orchestration: Kubernetes
- GitOps: Argo CD
- Configuration: Kustomize
- Local cluster: Minikube
- Source control: GitHub
- Registry: Docker Hub

## Application Repository

`https://github.com/Ranjith123-juttu/gitops-demo-shop`

The GitOps deployment configuration will later live in a separate repository:

`gitops-demo-shop-gitops`

## Development Principles

- Separate application code from deployment configuration.
- Keep configuration outside business logic.
- Expose health endpoints for automation and orchestration.
- Use semantic versioning.
- Never commit secrets.
- Prefer reproducible builds.
- Keep commits small and meaningful.

## Current Stage

**Stage 1 — Application foundation**

We are validating the frontend and backend locally.

Future stages:

1. Application foundation
2. PostgreSQL integration
3. Docker images
4. Docker Compose
5. Kubernetes manifests
6. Kustomize
7. GitOps repository
8. Argo CD
9. Automated synchronization
10. Self-healing and drift detection
11. CI pipeline
12. Dev/QA/Prod promotion
