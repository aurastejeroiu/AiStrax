from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_rate_plan():
    payload = {
        "plan_id": 1,
        "rating": 5
    }

    response = client.post(
        "/rate-plan",
        json=payload
    )

    assert response.status_code == 200