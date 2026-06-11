from pydantic import BaseModel
from typing import List


class PublicPlanRequest(BaseModel):
    describe_the_goal: str
    event_deadline: str
    departments: List[str]
    format: str = "json"