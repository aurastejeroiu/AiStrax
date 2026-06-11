from pydantic import BaseModel
from typing import List


class LearningPlanRequest(BaseModel):
    describe_the_goal: str
    deadline: str
    learning_materials_links: List[str]
    format: str = "json"