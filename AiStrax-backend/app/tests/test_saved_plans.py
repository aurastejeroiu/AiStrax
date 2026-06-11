from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_saved_plans():
    response = client.get(
        "/plans"
    )

    assert response.status_code == 200