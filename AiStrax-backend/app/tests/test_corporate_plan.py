from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_generate_corporate_plan():
    payload = {
        "describe_the_goal": "Cloud Migration",
        "deadline": "12 months",
        "team_members": [
            {
                "name": "John",
                "role": "Developer",
                "availability": "Full Time"
            }
        ],
        "format": "json"
    }

    response = client.post(
        "/generate-corporate-plan",
        json=payload
    )

    assert response.status_code == 200