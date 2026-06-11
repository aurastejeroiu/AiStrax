from pydantic import BaseModel, Field


class RatePlanRequest(BaseModel):
    plan_id: int
    rating: float = Field(ge=1, le=5)