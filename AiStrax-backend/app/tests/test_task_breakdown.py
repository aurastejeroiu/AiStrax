from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_generate_task_breakdown():
    payload = {
        "task_name":
            "Build a portfolio website",
        "duration": 14
    }

    response = client.post(
        "/task-breakdown",
        json=payload
    )

    assert response.status_code == 200