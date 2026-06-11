from pydantic import BaseModel, Field


class PersonalPlanRequest(BaseModel):
    describe_the_goal: str
    deadline: str
    implication_level: int = Field(ge=1, le=7)
    format: str = "json"