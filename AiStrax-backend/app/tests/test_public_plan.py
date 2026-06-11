from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_generate_public_plan():
    payload = {
        "describe_the_goal": "Student Festival",
        "event_deadline": "4 months",
        "departments": [
            "Marketing",
            "Logistics",
            "PR"
        ],
        "format": "json"
    }

    response = client.post(
        "/generate-public-plan",
        json=payload
    )

    assert response.status_code == 200