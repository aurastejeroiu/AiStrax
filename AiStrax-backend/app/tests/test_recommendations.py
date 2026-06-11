from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_recommendations():
    response = client.get(
        "/recommendations"
    )

    assert response.status_code == 200

def test_get_recommendation_details():
    response = client.get(
        "/recommendations/1"
    )

    assert response.status_code == 200