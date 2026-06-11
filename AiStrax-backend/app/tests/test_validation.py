from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_personal_plan_validation():
    response = client.post(
        "/generate-personal-plan",
        json={}
    )

    assert response.status_code == 422

def test_learning_plan_validation():
    response = client.post(
        "/generate-learning-plan",
        json={}
    )

    assert response.status_code == 422

def test_corporate_plan_validation():
    response = client.post(
        "/generate-corporate-plan",
        json={}
    )

    assert response.status_code == 422

def test_public_plan_validation():
    response = client.post(
        "/generate-public-plan",
        json={}
    )

    assert response.status_code == 422