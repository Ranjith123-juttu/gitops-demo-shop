from flask import Blueprint, jsonify

api = Blueprint("api", __name__)


@api.get("/health")
def health():
    """Liveness endpoint."""
    return jsonify({
        "status": "healthy",
        "service": "gitops-demo-shop-backend",
    }), 200


@api.get("/ready")
def readiness():
    """Readiness endpoint; database checks come later."""
    return jsonify({
        "status": "ready",
        "service": "gitops-demo-shop-backend",
    }), 200


@api.get("/products")
def products():
    """Temporary product data for Stage 1."""
    return jsonify({
        "items": [
            {"id": 1, "name": "Classic Coffee", "price": 149.00, "currency": "INR"},
            {"id": 2, "name": "Cold Brew", "price": 179.00, "currency": "INR"},
            {"id": 3, "name": "Cappuccino", "price": 199.00, "currency": "INR"},
        ]
    }), 200


@api.get("/version")
def version():
    return jsonify({
        "application": "gitops-demo-shop",
        "version": "0.1.0",
    }), 200
