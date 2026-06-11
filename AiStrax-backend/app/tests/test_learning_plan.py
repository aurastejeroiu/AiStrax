from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_generate_learning_plan():
    payload = {
        "describe_the_goal": "Become a Data Engineer",
        "deadline": "6 months",
        "learning_materials_links": [
            "https://example.com/course"
        ],
        "format": "json"
    }

    response = client.post(
        "/generate-learning-plan",
        json=payload
    )

    assert response.status_code == 200