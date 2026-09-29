# Application Architecture

## Current Stage

```text
Browser
   |
   v
Frontend
HTML + CSS + JavaScript
   |
   | HTTP / JSON
   v
Backend API
Flask + Gunicorn
   |
   v
Temporary in-memory product data
```

PostgreSQL will replace the temporary data in the database integration stage.

## GitOps Target

```text
Developer
    |
    v
Application Git Repository
    |
    v
CI Pipeline
    |
    +--> Test
    +--> SonarQube
    +--> Trivy
    +--> Build image
    |
    v
Docker Registry
    |
    v
GitOps Repository
    |
    v
Argo CD
    |
    | reconciliation
    v
Kubernetes
    |
    +--> Frontend
    +--> Backend
    +--> PostgreSQL
```

The CI pipeline will not directly deploy to Kubernetes in the final architecture.

Git will hold the desired deployment state, and Argo CD will reconcile Kubernetes with that state.
