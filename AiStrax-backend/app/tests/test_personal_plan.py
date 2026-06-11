from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_generate_personal_plan():
    payload = {
        "describe_the_goal": "Learn Python",
        "deadline": "3 months",
        "implication_level": 5,
        "format": "json"
    }

    response = client.post(
        "/generate-personal-plan",
        json=payload
    )

    assert response.status_code == 200