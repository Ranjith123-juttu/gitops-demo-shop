from app import create_app


def test_health():
    client = create_app().test_client()
    response = client.get("/api/health")

    assert response.status_code == 200
    assert response.get_json()["status"] == "healthy"


def test_products():
    client = create_app().test_client()
    response = client.get("/api/products")

    assert response.status_code == 200
    assert len(response.get_json()["items"]) == 3
