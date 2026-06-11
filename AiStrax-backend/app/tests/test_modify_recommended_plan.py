from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_modify_plan():
    payload = {
        "plan_id": 1,
        "modification_request":
            "Reduce duration and focus on practical tasks"
    }

    response = client.post(
        "/modify-recommended-plan",
        json=payload
    )

    assert response.status_code == 200