from pydantic import BaseModel


class ModifyPlanRequest(BaseModel):
    plan_id: int
    modification_request: str