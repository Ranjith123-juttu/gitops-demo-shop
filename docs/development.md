# Development Guide

## Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python run.py
```

Test the API:

```bash
curl http://localhost:5000/api/health
curl http://localhost:5000/api/products
curl http://localhost:5000/api/version
```

Run tests:

```bash
pytest
```

## Frontend

The frontend expects `/api/*` requests to be proxied by Nginx to the backend.

The Nginx configuration is used in the Docker stage.
